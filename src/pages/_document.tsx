import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ja">
      <Head></Head>
      <body className="bg-white text-black antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
