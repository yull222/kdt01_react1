import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function MyRef1() {
  const refInput1 = useRef();
  const refInput2 = useRef();
  const result = useRef();
  const refSelect = useRef();


  useEffect(() => {
    refInput1.current.focus();
  }, []);


  const handleCal = (e) => {
    e.preventDefault(); 
    //입력 공백 체크
    if(refInput1.current.value=''){
        alert("첫번째 값을 입력하세요");
        refInput1.current.focus();
    }
    if(refInput2.current.value=''){
        alert("두번째 값을 입력하세요");
        refInput2.current.focus();
    }

    const num1 = parseInt(refInput1.current.value);
    const num2 = parseInt(refInput2.current.value);
    const o = refSelect.current.value;

    let calc = 0;

    switch (o) {
      case "+":
        calc = num1+num2;
        break;
      case "-":
        calc= num1-num2;
        break;
      case "x":
        calc= num1*num2;
        break;
      case "/":
        calc = num1/num2;
        break;
      default:
        
    }

    const handleInit=()=>{
        refInput1.current.value="";
        refInput2.current.value="";
        result .current.value="";
    }

    result.current.value = calc;
  };

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <form className="w-10/12 grid grid-cols-5 gap-5 bg-red-100 p-5">
        <input
          type="number"
          ref={refInput1}
          
          className="bg-amber-100 border border-amber-300 text-black text-sm rounded-lg"
        />

        <select
          ref={refSelect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg text-center focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        >
          <option value="+" defaultValue>
            +</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>

        <input
          type="number"
          ref={refInput2}
          className="bg-amber-100 border border-amber-300 text-black text-sm rounded-lg"
        />

        <TailButton caption="=" color="blue" onClick={handleCal} />

        <input
          type="text"ref={result}readOnly
          className="bg-amber-100 border border-amber-300 text-black text-sm rounded-lg"
        />
      </form>
    </div>
  );
}