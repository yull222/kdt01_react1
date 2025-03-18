import TailButton from "../UI/TailButton"
import { useState ,useEffect, useRef} from "react";

export default function MyRef() {
    //컴포넌트 변수
    let cnt=0;
    //useState
    const [stCnt, setStCnt]=useState(0);

    //Ref변수
    const [refCnt,setRefCnt]=useRef(0);
    //컴포넌트 변수 증가 >화면에 렌더링이 일어나지 않음>state변수를 사용해야함
    const handleCnt=()=>{
        cnt=cnt+1;
        console.log("cnt=",cnt);
    }
    //state 변수 증가 
    const handleStCnt=()=>{
        setStCnt(stCnt+1);
        //console.log("stCnt=",stCnt);
    }
    //ref 변수 증가 
    const handleRefCnt=()=>{
        refCnt.current=refCnt.current+1;
        console.log("refCnt=" ,refCnt.current);
    }
    //>STATE변수가 변경되었을 때를 찾을수있다.


    //뒤 DEFENDENCY에 따라
    useEffect(()=>{
        console.log("stCnt=",stCnt);
    })
  return (
    <div className="w-full">
        <div className="w-10/12  grid grid-cols-3 gap-4">
            <div className="flex justify-center items-end my-5 text-2xl font-bold">
                컴포넌트 변수: {cnt} 
                
            </div>
            <div className="flex justify-center items-end my-5 text-2xl font-bold">
                State 변수: {stCnt}
            </div>
            <div className="flex justify-center items-end my-5 text-2xl font-bold">
                Ref변수: 
            </div>
            
            <TailButton caption="컴포넌트 변수 증가"
                        color='blue'
                        onClick={handleCnt}/>
            <TailButton caption="State변수 증가"
                        color='blue'
                        onClick={handleStCnt}/>
            <TailButton caption="Ref 변수 증가"
                        color='blue'
                        onClick={handleRefCnt}/>

   
    </div>           
    </div>
  )
}
