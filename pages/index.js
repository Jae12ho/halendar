import Head from 'next/head';
import Layout from './layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>헬린더</title>
        <meta name="description" content="헬린더" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg pb-4">Beta Service</h1>
        <div className="flex justify-center items-center">
          <Link href="/login">
            <button className="m-1 cursor-pointer w-20 h-10 rounded-md shadow-sm border bg-white">LOGIN</button>
          </Link>
          <Link href="/register">
            <button className="m-1 cursor-pointer w-20 h-10 rounded-md shadow-sm border bg-white">REGISTER</button>
          </Link>
          <Link href="/main">
            <button className="m-1 cursor-pointer w-20 h-10 rounded-md shadow-sm border bg-white">MAIN</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
