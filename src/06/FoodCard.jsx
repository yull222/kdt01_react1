import bank from "../assets/bank.png"
import busan from "../assets/busan.png"
import market from "../assets/market.png"
import { useState } from "react";

//버튼을 클릭하면 해당하는 값의 카드를 가져오기

//obj를 넘겨줌
export default function FoodCard({obj}) {
  
    const [isshow,setisshow]= useState(false);


    //키는 문자열이니까 "" 사용하기
    const imggubun={

        "광역지원센터": busan,
        "기초푸드뱅크": bank,
        "기초푸드마켓": market
    }

    const handleshow = () => {
        setisshow(!isshow);
    };

   

    //{자료구조이름[전달파라미터["키"]]}
    return (
        <div className='w-full h-full flex justify-start items-start border border-red-200 pt-0.5'>
            
            <div className='w-2/6 '>
            
                <img src={imggubun[obj["구분"]]} alt={obj["구분"]} />
            </div>


            <div className='w-4/6 ml-5' >
                <h1 className="h-2/5 text-2xl m-1 font-bold flex justify-start items-start pt-1">
                    {obj['사업장명']}
                </h1>
                <p className="h-1/5 mb-2  text-lg font-bold pt-2 m-1">
                    {obj['운영주체명']}
                </p>
                <p className="h-1/5 mb-2  text-xs  pt-2 m-2">
                    {obj['사업장 소재지']}
                </p>
                <div className="h-1/5 mb-6 pt-6 text-xs m-2 bg-gray-400   cursor-pointer"   onClick={handleshow}>
                    
                       {isshow && obj['연락처(대표번호)']} {isshow && obj['팩스번호']}
                   
                </div>
               
            </div>
        </div>
    )
}
