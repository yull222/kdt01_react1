import {useState, useEffect} from "react"
import styles from "./MyClockTime1.module.css"
import TailButton from "../UI/TailButton";

function MclockTime(){

    const [currentTime, setcurrentTime]= useState(new Date());

    useEffect(()=>{
        let tm =setInterval(()=>{

            setcurrentTime(new Date());
        }, 1000);

        return ()=>{
            clearInterval(tm)
        }


    },[]);


    return(
        
        <div className="w-full p-10 text-line-900 flex flex-col  justify-center items-center  text-red-300 text-4xl">
            <p className="pst">
                현재시각 

            </p>
            <p className={styles.pst} >
                {currentTime.toLocaleTimeString()}


            </p>
            
        
        </div>
    )
}
export default MclockTime;