import { AppProps } from "next/app"
import { Header } from "../components/Header"
import { SessionProvider } from "next-auth/react"

import '../../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //Se der um F5 os dados da sessão do usuário se logado ou não vão para a pageProps
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
