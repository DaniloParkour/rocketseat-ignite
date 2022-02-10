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

      await fauna.query(
        q.Create(
          q.Collection('users'),
          { data: {email: user.email} }
        )
      )

      return true
    },
  }
})
