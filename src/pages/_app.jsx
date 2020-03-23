import { Head } from 'react';
import '../styles/globalStyle.scss';

export default ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Coin - 같이의 가치를 믿다</title>
    </Head>
    <Component {...pageProps} />
  </>
);
