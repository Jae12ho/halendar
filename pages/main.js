import Head from 'next/head';
import Calendar from '../components/main/Calendar';
import Farm from '../components/main/Farm';
import Layout from './layout';

export default function Main() {
  return (
    <Layout>
      <Head>
        <title>헬린더</title>
        <meta name="description" content="헬린더" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Farm />
      <Calendar />
    </Layout>
  )
}
