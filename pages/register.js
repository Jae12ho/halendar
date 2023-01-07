import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "./layout";

export default function Register() {

    return (
        <Layout>
            <Head>
                <title>로그인</title>
                <meta name="description" content="헬린더" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-[67%] flex flex-col justify-around items-center">
                    <h1 className="font-extrabold text-[20px] border-b-2 border-black mb-16">회원가입</h1>
                    <div className="w-full flex flex-col justify-center items-center my-1">
                        <p className="w-full font-medium text-[12px]">Email</p>
                        <input className="rounded-[17px] w-full h-[34px] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] text-[12px] font-medium outline-none px-3" placeholder="이메일을 입력하세요" />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center my-1">
                        <p className="w-full font-medium text-[12px]">Password</p>
                        <input className="rounded-[17px] w-full h-[34px] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] text-[12px] font-medium outline-none px-3" type="password" placeholder="비밀번호를 입력하세요" />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center my-1">
                        <p className="w-full font-medium text-[12px]">Password</p>
                        <input className="rounded-[17px] w-full h-[34px] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] text-[12px] font-medium outline-none px-3" type="password" placeholder="비밀번호를 입력하세요" />
                    </div>
                    <button className="w-full rounded-[17px] h-[34px] bg-[#FFC16C] shadow-[0_0_4px_rgba(0,0,0,0.25)] text-[12px] font-bold my-8">회원가입</button>
                    <p className="text-[14px] font-extrabold">Or</p>
                    <div className="w-full flex justify-between my-6">
                        <Image src="/account/kakao.svg" width="45px" height="45px" />
                        <Image src="/account/google.svg" width="45px" height="45px" />
                        <Image src="/account/gitHub.svg" width="45px" height="45px" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}