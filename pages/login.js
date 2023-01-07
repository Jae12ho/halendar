import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "./layout";

export default function Login() {

    return (
        <Layout>
            <Head>
                <title>로그인</title>
                <meta name="description" content="헬린더" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-[67%] flex flex-col justify-around items-center">
                    <h1 className="font-extrabold text-[20px] border-b-2 border-black mb-16">로그인</h1>
                    <div className="w-full flex flex-col justify-center items-center my-1">
                        <p className="w-full font-medium text-[12px]">Email</p>
                        <input className="rounded-[17px] w-full h-[34px] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] text-[12px] font-medium outline-none px-3" placeholder="이메일을 입력하세요" />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center my-1">
                        <p className="w-full font-medium text-[12px]">Password</p>
                        <input className="rounded-[17px] w-full h-[34px] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] text-[12px] font-medium outline-none px-3" type="password" placeholder="비밀번호를 입력하세요" />
                    </div>
                    <div className="w-full flex flex-row-reverse text-[12px] text-[#A6A6A6] font-medium"><span>비밀번호를 잊으셨나요?</span></div>
                    <button className="w-full rounded-[17px] h-[34px] bg-[#FFC16C] shadow-[0_0_4px_rgba(0,0,0,0.25)] text-[12px] font-bold my-8">로그인</button>
                    <p className="text-[14px] font-extrabold">Or</p>
                    <div className="w-full flex justify-between my-6">
                        <Image src="/account/kakao.svg" width="45px" height="45px" />
                        <Image src="/account/google.svg" width="45px" height="45px" />
                        <Image src="/account/gitHub.svg" width="45px" height="45px" />
                    </div>
                    <div className="w-full flex justify-center text-[12px] text-[#FF983F] font-extrabold">
                        <span className="text-[#A6A6A6] font-medium mr-1">헬린더에 처음이신가요?</span>
                        <Link href="/register">회원가입 하기</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}