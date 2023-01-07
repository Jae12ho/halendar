export default function DayBox({ color, isClicked, day }) {

    return (
        <div className="flex flex-col justify-center items-center bg-white cursor-pointer">
            <div className={`${color === 1 ? 'bg-[#FFDF8B]' : color === 2 ? 'bg-[#FFC16C]' : color === 3 ? 'bg-[#FF983F]' : 'bg-white'} w-[25px] h-[25px] rounded-[5px] shadow-[0_0_4px_rgba(0,0,0,0.25)] border-[0.5px_solid_#D7D7D7]`}></div>
            <p className={`${day !== "" && isClicked ? "text-white text-center text-[10px] bg-[#565353] w-[15px] h-[15px] rounded-full" : ""} flex justify-center items-center text-[12px] h-[15px] font-bold mt-1`}>{day}</p>
        </div>
    )
}