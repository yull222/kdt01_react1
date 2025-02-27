
// 1) useStat import하기
import { useState } from "react";
export default function Mylistitems({ dn1, dn2, dn3 ,show}) {

    // 2) 변수 설정하기
    const [cnt, setCnt] = useState(0);

    // 3) 함수 설정하기
    const handle = () => {
        setCnt(cnt + 1);
    };
    return (
        <div className='w-full h-full flex border border-red-200 pt-0.5'>
            <div className='w-1/4 '>
                <img src={dn2} alt="dn1" />
            </div>
            <div className='w-3/4 ml-10' >
                <h1 className="h-1/4 text-2xl font-bold flex justify-start items-start pt-5">
                    {dn1}
                </h1>
                <p className="h-2/4 text-lg pt-2">
                    {dn3}
                </p>
                
                
               <div className="h-1/4 text-xl font-bold flex justify-end items-end px-5 py-8">
                       {show && <span onClick={handle} className="cursor-pointer"> ❤️  좋아요 {cnt}</span>}
                        </div>
                        

            </div>
        </div>
    )
}