import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/layouts/header';
import Sider from '../components/layouts/sider';

import { Layout } from 'antd'
const { Content } = Layout;

import type { AppProps } from 'next/app'
import { PokeProvider as Provider } from '../context/PokeContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kawan Lama Pokemon</title>
        <meta name="description" content="pokemon kawan lama" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Layout className="layoutWrapper">
        <Header/>
        <Layout>
          <Sider/>
          <Provider>
            <Content className="contentWrapper">
              <Component {...pageProps} />
            </Content>
          </Provider>
        </Layout>
      </Layout>
    </>
  )
}

export default MyApp
