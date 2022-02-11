import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { fauna } from "../../services/fauna";
import { query as q } from 'faunadb'
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'POST') {

    //Pagar informações do usuário que comprou a assinatura
    const session = await getSession({ req }) //token, user, data de exppiração

    const user = await fauna.query(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email)
        )
      )
    )

    let customerId = user.data.stripe_customer_id

    if(!customerId) { //Se existe o usuário com esse email no Fauna mas não tem um "stripe_customer_id" cria novo customer no stripe

      //Cadastrar user no Stripe
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
        // metadata
      })

      //Salvar no FaunaDB usuário Stripe criado para reaproveitar quando for acessado novamente
      await fauna.query(
        q.Update(
          q.Ref( q.Collection('users'), user.ref.id ),
          {
            data: {
              stripe_customer_id: stripeCustomer.id
            }
          }
        )
      )

      customerId = stripeCustomer.id

    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create ({
      customer: customerId, //Informar qual customer fez o checkout
      payment_method_types: ['card'],
      billing_address_collection: 'required', //Nesse caso seria melhor "auto" esta sendo usado "required" para ver mais a frente ma funcionalidade
      line_items: [
        { price: 'price_1KR1WTLpXfaohxi63OmDHrYr', quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true, //Permitir que use copuns de código
      success_url: process.env.STRIPE_SUCCESS_URL, //Para onde ir quando sucesso
      cancel_url: process.env.STRIPE_CANCEL_URL
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id })

  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Mehlod not allowed')
  }

}
