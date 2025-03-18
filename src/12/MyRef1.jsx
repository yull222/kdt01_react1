import TailButton from "../UI/TailButton"
import { useState ,useEffect, useRef} from "react";

export default function MyRef1() {

    const refInput1=useRef();
    const refInput2=useRef();
    const result=useRef();
    const refSelect=useRef();
  

    //컴포넌트 생성 시 입력상자에 포커스
    useEffect(()=>{
        refInput1.current.focus();
    },[]);

    const handleCal=(e)=>{
        e.preventDefault;

    }

  return (
    <div className=" w-full flex justify-center flex-col  items-center ">
        <form className="w-10/12  grid grid-cols-5 gap-5 bg-red-100 p-5">

        <input type="number" id="txt1" 
        ref={refInput1}
        className="bg-amber-100 border border-amber-300
        text-black text-sm rounded-lg
        "/>
        
          
        <select id="a1"
        ref={refSelect}
        className="bg-gray-50 border border-gray-300
                       text-gray-900 text-lg rounded-lg text-center
                       focus:ring-blue-500 focus:border-blue-500 
                       block w-full p-2">
            <option value="+" defaultValue>+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>

        </select> 

        <input type="number" id="txt2" 
        ref={refInput2}
        className=" bg-amber-100 border border-amber-300
        text-black text-sm rounded-lg
        "></input>

        <TailButton caption="="
                    color='blue'
                    />
        
        <input type="number" id="txt3" 
        ref={result}
        switch () {
            case "+" value:
                
                break;
        
            default:
                break;
        }
        className=" bg-amber-100 border border-amber-300
        text-black text-sm rounded-lg read-only:
        "></input>


   
    </form>           
    </div>
  )
}
