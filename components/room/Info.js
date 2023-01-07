import axios from "axios";
import { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";

export default function Info() {
    const [data, setData] = useState({ user: 1, name: "김멋사", level: 1, exp: 75 });

    useEffect(() => {
        const params = {
            user_id : 1
        }
        axios.get('https://api.likelionerica.com/hellc/pet/', { params })
        .then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <div className="w-full h-1/4 relative z-20 flex flex-col justify-center items-center bg-white rounded-[18px] px-4 py-6 my-4 border-1 shadow-[0_-4px_8px_rgba(0,0,0,0.06)]">
                <div className="w-5/6">
                    <div className="flex">
                        <div className="mr-2">
                            <Image src="/info/default_profile.svg" width="54px" height="54px" alt="lion" />
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="text-[18px] font-bold mr-2 whitespace-nowrap">{data.name}</div>
                                <div className="w-full">
                                    <div className="text-[12px] text-[#757575] font-medium">H - Lv. {data.level}</div>
                                    <div className="w-full bg-[#FFEBD0] rounded-full h-[2px]">
                                        <div className="bg-[#FF983F] h-[2px] rounded-full" style={{width: data.exp + "%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#757575] text-[14px] font-medium">나는 세계 최고의 헬창이 될거야!</p>
                        </div>
                    </div>
                    <div className="flex justify-between pt-3">
                        <Link href="/record">
                            <button className="w-[130px] h-[56px] bg-[#FF983F] rounded-[30px] flex justify-center items-center">
                                <Image src="/info/QR.svg" width="22px" height="22px" alt="QR" />
                                <span className="ml-1 font-bold text-[18px]">QR</span>
                            </button>
                        </Link>
                        <button className="w-[110px] h-[56px] bg-[#FFC16C] rounded-[30px] flex justify-center items-center">
                            <Image src="/info/invite.svg" width="22px" height="22px" alt="invite" />
                            <span className="ml-1 font-bold text-[18px]">초대</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="btm-con-cal mt-[-40px] relative z-10 w-full h-[40px] rounded-b-[18px]"></div>
        </>
    )
}