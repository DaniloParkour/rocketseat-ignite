import Document, { Html, Head, Main, NextScript } from "next/document";

//_document é um nivel ainda muito proximo ao HTML na etapa de renderização e não está
//pronto para receber SCSS por exemplo

//Precisamos por enquanto criar esse componente no modo de classe para o Next
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
    // Precisamos colocar os dois componentes abaixo
    // <Main /> => Todo o conteúdo da aplicação
    // <NextScript /> => Onde o Next vai colocar os arquivos JS
  }
}
