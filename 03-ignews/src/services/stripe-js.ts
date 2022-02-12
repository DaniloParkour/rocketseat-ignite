import { loadStripe } from "@stripe/stripe-js"

export async function getStripeJs() {
  //Como aqui roda no client-side, informamos aqui a chave pública do dashboard do stripe
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

  return stripeJs
}
