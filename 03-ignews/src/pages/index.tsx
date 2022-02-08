//Tudo que for colocado no Head importado aqui será anexado ao head do _document.ts
//Podemos alterar os valores do _document enquanto a aplicação está executando
//Podemos usar também para SEO, entre outros ex: <meta>.
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';

// removendo o uso desse css module
//import styles from '../../styles/home.module.scss'

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>New about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
