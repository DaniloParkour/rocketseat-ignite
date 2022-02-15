import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href=''>
            <time>12 de março de 2021</time>
            <strong>Strong text strong text strong text</strong>
            <p>Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem?</p>
          </a>
          <a href=''>
            <time>12 de março de 2021</time>
            <strong>Strong text strong text strong text</strong>
            <p>Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem?</p>
          </a>
          <a href=''>
            <time>12 de março de 2021</time>
            <strong>Strong text strong text strong text</strong>
            <p>Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem? Como você está? Está tudo bem com o nenem?</p>
          </a>
        </div>
      </main>
    </>
  );
}