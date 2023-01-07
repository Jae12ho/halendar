import { useCallback, useEffect, useState } from "react";
import DayBox from "./DayBox";
import Image from "next/image";
import axios from "axios";
import Detail from "./Detail";

export default function Calendar() {
    const [dayOfWeek] = useState(['일', '월', '화', '수', '목', '금', '토']);
    const [days, setDays] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const [colors, setColors] = useState([]);
    const [calRow, setCalRow] = useState(parseInt(new Date().getDay() / 7));
    const [calCol, setCalCol] = useState(new Date().getDay() % 7);

    const makeCalendar = useCallback(async (year, month) => {
        let tmp = [];
        let result = [];

        const date = new Date(year, month - 1);
        const firstDay = new Date(date.setDate(1)).getDay();
        const lastDay = new Date(year, month, 0).getDate();
        
        const isOver = firstDay === 5 && lastDay === 31 || firstDay >= 6 && lastDay >= 30;

        for (let i = 0; i < 6; i++) {
            tmp = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0) {
                    tmp.push(j < firstDay ? "" : j - firstDay + 1);
                } else if (!isOver && i === 4) {
                    tmp.push(j + 29 - firstDay <= lastDay ? j + 29 - firstDay : "");
                } else if (isOver && i === 5) {
                    tmp.push(j + 36 - firstDay <= lastDay ? j + 36 - firstDay : "");
                } else {
                    tmp.push(j + i * 7 + 1 - firstDay);
                }
            }
            result.push(tmp);

            if ((i + 1) * 7 > lastDay) break;
        }

        if (JSON.stringify(days) !== JSON.stringify(result)) setDays(result);

        return result;
        
    }, [days]);

    const makeColors = useCallback((days, year, month) => {
        let tmp = [];
        let result = [];

        const params = {
            user_id: 1,
            year: year,
            month: month
        }
        axios.get('https://api.likelionerica.com/hellc/calendar/', { params }).then((res) => {

            days.map((row, i) => {
                tmp = []

                row.map((col, j) => {
                    if(col) {
                        if (Object.keys(res.data.result[col - 1])) {
                            const tot_t = res.data.result[col - 1].total_time;
                            tmp.push({ n : (tot_t < 10 ? 1 : tot_t < 20 ? 2 : tot_t >= 20 ? 3 : 0), log: res.data.result[col - 1].log });
                        } else {
                            tmp.push({ n : 0, log: [] });
                        }
                    } else {
                        tmp.push({ n : 0, log: [] });
                    }
                })
                result.push(tmp);
            })    

            if (JSON.stringify(colors) !== JSON.stringify(result)) {
                setColors(result);
            }

        }).catch((err => console.log(err)));

    }, [colors]);

    useEffect(() => {
        makeCalendar(year, month).then(res => {
            makeColors(res, year, month);
        });
    }, [month]);

    
    const prevMonth = () => {
        if (month > 1) {
            setMonth(month - 1);
        } else {
            setMonth(12);
            setYear(year - 1);
        }
    };

    const nextMonth = () => {
        if (month < 12) {
            setMonth(month + 1);
        } else {
            setMonth(1);
            setYear(year + 1);
        }
    };

    const handleClick = (i, j) => {
        setCalRow(i);
        setCalCol(j);
    };

    return (
        <>
            <div className="w-full relative z-20 flex flex-col justify-center items-center bg-white rounded-[18px] p-4 my-4 border-1 shadow-[0_-4px_8px_rgba(0,0,0,0.06)]">
                <div className="w-full flex justify-between">
                    <div className="font-extrabold text-[19px] my-2">{year}. {month}.</div>
                    <div className="flex items-center">
                        <button className="hover:opacity-60 w-6 h-6" onClick={prevMonth}><Image src="/calendar/left.svg" width="24px" height="12px" alt="left"/></button>
                        <button className="hover:opacity-60" onClick={nextMonth}><Image src="/calendar/right.svg" width="24px" height="12px" alt="right"/></button>
                    </div>
                </div>

                <div className="w-full flex justify-between py-1 text-[12px] text-gray-500 text-center">
                    {dayOfWeek.map((w, index) => (<div key={index} className="w-[25px]">{w}</div>))}
                </div>

                
                {colors.length !== 0 && days.map((row, i) => (
                    <div key={i} className="w-full flex justify-between py-2">
                        {row.map((col, j) => (
                            <div key={j} onClick={() => { handleClick(i, j) }}>
                                <DayBox color={colors[i][j].n} isClicked={colors[i][j].isClicked} day={col} />
                            </div>
                        ))}
                    </div>
                ))}
                {colors.length !== 0 && (
                    <Detail data={colors[calRow][calCol].log} dayOfWeek={dayOfWeek} row={calRow} col={calCol} days={days} />
                )}

            </div>
            <div className="btm-con-cal mt-[-40px] mb-6 relative z-10 w-full h-[40px] rounded-b-[18px]"></div>
        </>
    )
}

