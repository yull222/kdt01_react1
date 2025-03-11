import {useState} from "react"

import TailButton from "../UI/TailButton";

function MclockTime(){

    const [currentTime, setcurrentTime]= useState(new Date());

    const handleClick=()=>{
        setcurrentTime(new Date());
    }


    return(
        
        <div className="w-full p-5 text-line-900 flex flex-col  justify-center items-center  text-red-300 text-4xl">
            현재시각 : {currentTime.toLocaleTimeString()}
            
        <div>
        
            <TailButton caption="클릭"
            color="blue"
            onClick={handleClick} />
        </div>
        </div>
    )
}
export default MclockTime;