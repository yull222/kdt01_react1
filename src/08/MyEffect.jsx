import { useEffect, useState } from "react"
import TailButton from "../UI/TailButton"
import { useState } from "react"
import TailButtonLine from "../07/TailButtonLine"
export default function MyEffect() {
    const [msg,setMsg]=useState(' ');
    const [color, setColor]=useState('blue')
    const handleClick=()=>{
        if (msg==='') setMsg="useEffect 예제: State 변수 변경시";
        else setMsg('');
    }

    useEffect(()=>{
        console.log("의존성 배열 []일때, 컴포넌트 생성 시 한번 실행");
        console.log("msg=",msg);
        console.log("color=",color);
    },[]);

    useEffect(()=>{
        console.log("state변수 useeffect msg=", msg);
        console.log("color=",color);
        
    },[msg]);


  return (
    <div className="w-full text-2xl font-bold flex justify-center items-center">
        <div className="text-2xl font-bold m-2">
            {msg}
        </div>
        <TailButton caption="useEffec 예제"
                        color="blue"
                        onClick={handleClick} />
    </div>
  )
}
