import { useEffect, useState } from "react";
import Layout from "./layout";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";

export default function Complete() {
    const [isCompleted, setIsCompleted] = useState(true);
    const [isTraining, setIsTraining] = useState(true);
    const [data, setData] = useState({
        user_id: 1,
        gym_name: "GYM",
        is_chest: false,
        is_back: false,
        is_leg: false,
        is_arm: false,
        is_shoulder: false
    });

    useEffect(() => {
        
    }, []);

    const test = () => {
        axios.post('https://api.likelionerica.com/hellc/calendar/record/', { 
            user_id: 1,
            gym_name: "ARNOLD GYM",
            is_chest: true,
            is_back: true,
            is_leg: true,
            is_arm: true,
            is_shoulder: true
         }).then(res => {
            console.log(res.data);
         })
    }

    const handleTraining = () => {
        if (!isTraining && !isCompleted) {
            setIsTraining(true);
        } else if (isTraining && !isCompleted) {
            setIsCompleted(true);
        } else {
            setIsTraining(false);
            setIsCompleted(false);
        }
    }

    const handleSelect = (e) => {
        const { name, value } = e.target;
        
        setData({
            ...data,
            [name]: value === "true" ? false : true
        })
    }

    return (
        <Layout>
            <Head>
                <title>헬린더</title>
                <meta name="description" content="헬린더" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="h-screen">
                {isCompleted && (
                    <div className="w-full h-full relative z-20 flex flex-col justify-center items-center bg-white rounded-[18px] p-4 my-4 border-1 shadow-[0_-4px_8px_rgba(0,0,0,0.06)]">
                        <Image src="/complete/complete.svg" width="157px" height="120px" alt="happy_lion" />
                        <h1 className="font-bold text-[20px] my-6">수고하셨습니다!</h1>
                        <div className="font-medium text-[14px] text-center my-6">
                            <p>오늘은</p>
                            <p><span className="text-[18px] text-[#FF983F] font-bold">{"19:00"}</span> 부터 <span className="text-[18px] text-[#FF983F] font-bold">{"20:30"}</span> 까지</p>
                            <p>총 <span className="text-[18px] text-[#FF983F] font-bold">{"1시간 30분"}</span> 동안</p>
                            <p>운동하셨습니다.</p>
                        </div>

                        <h2 className="text-[14px] font-bold">오늘은 어떤 부위를 운동하셨나요?</h2>

                        <div className="text-[14px] font-semibold flex justify-around w-3/4 py-3">
                            <button className={`${data.is_chest ? "bg-[#D6E5EE]" : "bg-white border border-[#E9E9E9] text-[#707070]"} w-[61px] h-[27px] rounded-[5px] flex justify-center items-center`} name="is_chest" value={data.is_chest} onClick={handleSelect}>가슴</button>
                            <button className={`${data.is_back ? "bg-[#DEECDC]" : "bg-white border border-[#E9E9E9] text-[#707070]"} w-[61px] h-[27px] rounded-[5px] flex justify-center items-center`} name="is_back" value={data.is_back} onClick={handleSelect}>등</button>
                            <button className={`${data.is_leg ? "bg-[#FAE3DE]" : "bg-white border border-[#E9E9E9] text-[#707070]"} w-[61px] h-[27px] rounded-[5px] flex justify-center items-center`} name="is_leg" value={data.is_leg} onClick={handleSelect}>하체</button>
                        </div>
                        <div className="text-[14px] font-semibold flex justify-around w-1/2 pb-3">
                            <button className={`${data.is_arm ? "bg-[#E2DEFA]" : "bg-white border border-[#E9E9E9] text-[#707070]"} w-[61px] h-[27px] rounded-[5px] flex justify-center items-center`} name="is_arm" value={data.is_arm} onClick={handleSelect}>어깨</button>
                            <button className={`${data.is_shoulder ? "bg-[#FFDDBD]" : "bg-white border border-[#E9E9E9] text-[#707070]"} w-[61px] h-[27px] rounded-[5px] flex justify-center items-center`} name="is_shoulder" value={data.is_shoulder} onClick={handleSelect}>팔</button>
                        </div>

                        <button className="w-[90px] h-[40px] bg-[#FFC16C] rounded-[10px] flex justify-center items-center font-bold text-[18px] text-white mt-8" onClick={handleTraining}>확인</button>
                    </div>
                )}
                {!isCompleted && (
                    <div className="w-full h-full flex justify-center items-center">
                        {!isTraining && (
                            <div className="h-full flex flex-col justify-around">
                                <p className="font-light text-[36px] text-center">00:00</p>
                                <button className="w-[130px] h-[56px] bg-[#FF983F] rounded-[30px] flex justify-center items-center font-bold text-[18px] text-white" onClick={handleTraining}>운동시작</button>
                            </div>
                        )}
                        {isTraining && (
                            <div className="h-full flex flex-col justify-around">
                                <p className="font-light text-[36px] text-center">01:30</p>
                                <button className="w-[130px] h-[56px] bg-[#FE504F] rounded-[30px] flex justify-center items-center font-bold text-[18px] text-white" onClick={handleTraining}>운동종료</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Layout>
    )
}