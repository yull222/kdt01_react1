import FoodCard from './FoodCard';
import fooddata from "./fooddata.json";
import { useState } from 'react';
import TailButton from '../UI/TailButton'

export default function Foodmain() {
    
    
    //useState
    const[tags,setTags]=useState([]);
    

    //category 가져오기 -배열
    let category= fooddata.map(item => item["운영주체 분류"].replaceAll(" ",""));
    category=[...new Set(category)];

    const handleCategory =(c)=>{

        

        let tm=fooddata.filter(item=>item["운영주체 분류"].replaceAll(' ','')==c)
                       .map(item => <FoodCard
                                          key={(item["사업장명"])}
                                          obj={item}
                                           /> );
        setTags(tm);  
        console.log("handleCategory",tm);
    }

    const bts=category.map(item => <TailButton 
        key = {item}
        caption = {item}
        color = "lime"
        onClick = {() => handleCategory(item)}
        />);
     
    
   
    
  return (
    
    <div className="w-11/12">
      <div className="w-full flex justify-center items-center
                      p-5 border border-lime-800">
        
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tags}
      </div>
    </div>
  )
}
