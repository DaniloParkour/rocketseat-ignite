import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'
import GitHubProvider from 'next-auth/providers/github'

import { query as q } from 'faunadb'
import { fauna } from  '../../../services/fauna'

export default NextAuth ({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      //Escopo é para definir quais informações queremos ter acesso
      // scope: 'read:user' //'read:user, outro:escopo, ...'
    }),
  ],
  callbacks: {
    async signIn({user, account, profile, email}) {

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'), //Compara o Index('user_by_email') com o user.email em minúsculo
                  q.Casefold(user.email) //user.email em LowerCase
                )
              )
            ),
            q.Create( //Se Não Existe algum Match (user_by_email com user.email) => Cria o novo na collection usuários
              q.Collection('users'),
              { data: {email: user.email} }
            ),
            q.Get( //Se Não (se existe esse Match) => Pega o usuário  da collection
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )
  
        return true
      } catch {
        return false
      }

    },
  }
})
