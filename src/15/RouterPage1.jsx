import {useParams} from "react-router-dom"
export default function RouterPage1() {
    const {item1, item2} =useParams();
  return (
    <div className="w-full h-full p-5 text-4xl">
      {item1}입니다
      
    </div>
  )
}
