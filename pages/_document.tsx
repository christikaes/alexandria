// A Next.js example
import Document, { Html, Head, Main, NextScript } from "next/document";
import { getInitColorSchemeScript } from "@mui/joy/styles";
import { Header } from "../components/Header";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="christikaes's portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {getInitColorSchemeScript()}
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
