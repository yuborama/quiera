import GlobalStyles from '@Src/styles';
import type { AppProps } from 'next/app';
import DefaultLayout from '../layouts/default';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <DefaultLayout >
      <GlobalStyles />
      <Component {...pageProps} />
     </DefaultLayout>
  )
}

export default MyApp
