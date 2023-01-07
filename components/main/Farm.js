import Image from "next/image";
import Link from "next/link";

export default function Farm() {

    return (
        <Link href="/room">
            <div className="hover:opacity-80">
                <div className="w-full h-[170px] relative z-20 rounded-[18px] bg-gradient-to-b from-[#FFE296] to-[#F9BD21] my-4 overflow-hidden">
                    <div className="w-[550px] h-[36px] pt-2">
                        <Image src="/farm/fence.svg" width="736px" height="36px" alt="fence" />
                    </div>
                </div>
                <div className="btm-con-farm mt-[-40px] relative z-10 w-full h-[40px] rounded-b-[18px]"></div>
            </div>
        </Link>
    )
}