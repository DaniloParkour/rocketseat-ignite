//Tudo que for colocado no Head importado aqui será anexado ao head do _document.ts
//Podemos alterar os valores do _document enquanto a aplicação está executando
//Podemos usar também para SEO, entre outros ex: <meta>.
import Head from 'next/head'

// removendo o uso desse css module
//import styles from '../../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <h1>Hello World</h1>
    </>
  )
}
