import Image from "next/image";

export default function Farm() {
    
    return (
        <>
            <div className="w-full h-2/3 relative z-20 rounded-[18px] bg-con-farm my-4 overflow-hidden">
                <div className="w-[550px] h-[36px] pt-2">
                    <Image src="/farm/fence.svg" width="736px" height="36px" alt="fence" />
                </div>
                <div className="absolute bottom-10 w-[550px] h-[36px] pb-2">
                    <Image src="/farm/fence.svg" width="736px" height="36px" alt="fence" />
                </div>
            </div>
            <div className="btm-con-farm mt-[-40px] relative z-10 w-full h-[40px] rounded-b-[18px]"></div>
        </>
    )
}