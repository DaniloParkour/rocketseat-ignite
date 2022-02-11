import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

  const {data: session, status} = useSession();

  async function handelSubscribe () {

    if(!session) {
      signIn('github')
      return
    }

    // Criar a checkaout session porém aqui é Client-Side e não podemos deixar a KEY 
    //Precisamos colocar essa parte no server-side (SSR, SSG ou chamar uma API route)
    //Aqui vamos usar API Routes pois a ação e com o click do usuário em uma página já carregada
    //subscribe.ts definido
    try {
      const respoonse = await api.post('/subscribe')

      const { sessionId } = respoonse.data //sessionId retornado do checkout no subscribe.ts

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })

    } catch (err) {
      alert(err.message)
    }

  }

  return (
    <button onClick={handelSubscribe} type='button' className={styles.subscribeButton} >
      Subscribe Now
    </button>
  );
}
