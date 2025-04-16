import {Link ,useNavigate}from "react-router-dom"
import TailButton from "../UI/TailButton"
export default function RouterHome() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/p2?item1=사과 & item2=과일")
    }
    
  return (
    <div className="w-full h-full p-40">
      <ul className="h-16 flex flex-col justify-center items-center p-5 gap-5 mx-3">
            
            <li className="w-full h-full p-9 flex justify-center items-center  border rounded-lg border-b-black 
            hover:bg-amber-300 hover:text-amber-50 mx-4 font-bold " >
                <Link to="/p1/사과/과일" >사과</Link>
                
            </li>

            <li className=" w-full h-full p-9 border rounded-lg flex justify-center items-center border-b-black 
            hover:bg-amber-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/p1/바나나/과일" >바나나</Link>
                

            </li>

            <li className=" w-full h-full p-9 flex justify-center items-center border rounded-lg border-b-black 
            hover:bg-amber-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/p1/당근/채소" >당근</Link>
                

            </li>




        </ul>
        <div className=" p-50 w-full h-full  flex flex-col  justify-center items-center rounded-lg 
            font-bold">
            
            
            
                  <div className="p-5 ">
                    <TailButton caption="사과"
                                color="blue"
                                onClick={()=>navigate("/p2?item1=사과&item2=과일")}  /></div>
                   <div className="p-5">
                    <TailButton caption="바나나"
                                color="blue"
                                onClick={()=>navigate("/p2?item1=바나나&item2=과일")}  /></div>
                <div className="p-5">        
                    <TailButton caption="당근"
                                color="blue"
                                onClick={()=>navigate("/p2?item1=당근&item2=채소")}  /></div>
                  
   

        </div>  
        

    </div>
  )
}
