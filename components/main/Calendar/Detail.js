
export default function Detail({ data, row, col, dayOfWeek, days }) {
    
    return(
        <div className="w-full mt-2">
            {days[row][col] && (
                <h1 className="font-extrabold text-[18px]">{days[row][col]}일 {"("}{dayOfWeek[col]}{")"}</h1>
            )}
            {data === undefined && (
                <p className="w-full h-[50px] flex justify-center items-center text-[#A3A3A3] text-[18px]">운동 기록 없음</p>
            )}
            {data?.map((item, index) => (
                <div key={index} className="flex flex-col justify-between my-3 px-3 py-1 pb-2 w-full h-[60px] rounded-[7px] shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between">
                        <div className="font-bold text-[14px]">{item.gym_name}</div>
                        <div className="font-bold text-[12px] text-[#A3A3A3]">{item.start_time} - {item.end_time}</div>
                    </div>
                    <div className="flex">
                        <div className={`${item.is_chest ? 'inline' : 'hidden'} w-[50px] h-[20px] mr-2 bg-[#D6E5EE] font-bold text-[12px] rounded-[3px] flex justify-center items-center`}>가슴</div>
                        <div className={`${item.is_back ? 'inline' : 'hidden'} w-[50px] h-[20px] mr-2 bg-[#DEECDC] font-bold text-[12px] rounded-[3px] flex justify-center items-center`}>등</div>
                        <div className={`${item.is_leg ? 'inline' : 'hidden'} w-[50px] h-[20px] mr-2 bg-[#FAE3DE] font-bold text-[12px] rounded-[3px] flex justify-center items-center`}>하체</div>
                        <div className={`${item.is_arm ? 'inline' : 'hidden'} w-[50px] h-[20px] mr-2 bg-[#FFDDBD] font-bold text-[12px] rounded-[3px] flex justify-center items-center`}>팔</div>
                        <div className={`${item.is_shoulder ? 'inline' : 'hidden'} w-[50px] h-[20px] bg-[#E2DEFA] font-bold text-[12px] rounded-[3px] flex justify-center items-center`}>어깨</div>
                    </div>
                </div>
            ))}
        </div>
    )
}