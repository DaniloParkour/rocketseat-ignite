export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  //Salvar as informações na banco de dados
  //Buscar usuário no banco do fauna com o ID do curtomerId "stripe_customer_id"
  //Salvar os dados da subscription do usuário no FaunaDB
  console.log('_____________________________________________________________________')
  console.log('Manage Subscription::::::::::::::::::::::::::::::::::::::::::::::::::')
  console.log(subscriptionId, customerId)
}
