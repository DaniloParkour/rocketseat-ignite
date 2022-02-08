import { AppProps } from "next/app"

import '../../styles/global.scss'
import { Header } from "../components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //Colocar o Header aqui para ficar visível em todas as páginas
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
