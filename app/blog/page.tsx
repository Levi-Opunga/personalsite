"use client"
import React,{useState} from 'react';
import {Calendar} from "@/components/ui/calendar";


const Page :React.FC = ()=>{
    const [date, setDate] = useState<Date | undefined>(new Date())

    return <>

        {date && <div>{date!!.toString()}</div>}
    <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-fit m-3"

    />

    </>
}

export default Page;