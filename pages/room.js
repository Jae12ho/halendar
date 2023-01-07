import Layout from './layout';
import Head from 'next/head';
import Farm from '../components/room/Farm';
import Info from '../components/room/Info';

export default function Room() {

    return (
        <Layout>
            <Head>
                <title>헬린더 - Room</title>
                <meta name="description" content="헬린더" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="h-screen">
                <Farm />
                <Info />
            </div>

        </Layout>
    )
}