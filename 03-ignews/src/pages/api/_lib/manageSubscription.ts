import { fauna } from "../../../services/fauna"
import { query as q } from "faunadb"
import { stripe } from "../../../services/stripe"

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  //Salvar as informações na banco de dados
  //Buscar usuário no banco do fauna com o ID do curtomerId "stripe_customer_id"
  //Salvar os dados da subscription do usuário no FaunaDB
  
  //Precisamos da ref do usuário no FaunaDB pois é a forma usada para os relacionamentos
  const userRef = await fauna.query(
    q.Select(
      "ref", //Trazer apenas o campo "ref"
      q.Get( //SELECT quando encontrar o stripe_customer_id
        q.Match(
          q.Index("user_by_stripe_customer_id"), //Index da collection do fauna
          customerId
        )
      )
    )
  )

  //Pegar todos os dados da subscription (por enquanto temos apenas o ID)
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  //Ajustar e salvar esses dados no banco de dados
  const subscriptionData = {
    id: subscription.id,
    userId: userRef, //UserID do FaunaDB
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  }

  await fauna.query(
    q.Create(
      q.Collection("subscription"),
      { data: subscriptionData }
    )
  )
  
}
