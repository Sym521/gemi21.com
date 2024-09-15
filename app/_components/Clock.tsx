"use client"
import moment from "moment";
import { useEffect, useState } from "react"

export const Clock = () => {
    const [time, setTime] = useState<string>(moment().format('LTS'));
    useEffect(() => {
        const timeoutID = setTimeout(() => { setTime(moment().format('LTS'))}, 1000);
        return () => {
            clearTimeout(timeoutID);
        }
    }, [time])
    return (
        <p>{time}</p>
    )
}