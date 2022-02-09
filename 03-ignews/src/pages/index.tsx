//Tudo que for colocado no Head importado aqui será anexado ao head do _document.ts
//Podemos alterar os valores do _document enquanto a aplicação está executando
//Podemos usar também para SEO, entre outros ex: <meta>.
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

// removendo o uso desse css module
//import styles from '../../styles/home.module.scss'

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for { product.amount } month</span>
          </p>
          <SubscribeButton priceId={ product.priceId } />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

//Definindo uma cógido para ser executado no Lado Servidor
//Precisa ser atribuído a uma const com esse mesmo nome e desse mesmo tipo
//Precisa atribuir uma função async assim como definido abaixo
export const getServerSideProps: GetServerSideProps = async () => {
  //Parametro passado para "retrieve" é o ID do price
  const price = await stripe.prices.retrieve('price_1KR1WTLpXfaohxi63OmDHrYr', {
    expand: ['product'] //Acessar todas as informações do produto após o responde
  })

  //Como usamos o expand: ['product'] recebemos mais algumas informações do produco
  //por exemplo em price.product temos o nome do produto

  const product = {
    priceId: price.id,
    //Salvar preço em centavos para sempre ter um valor inteiro
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100), 
  }
  
  return {
    props: {
      product
    }
  }
}
