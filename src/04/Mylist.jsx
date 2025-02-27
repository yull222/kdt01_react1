import Mylistitems from "./Mylistitems"
import MyListData from "./MyListData.json"
export default function Mylist() {
    let show=true;
    let tags=MyListData.map(item=> <Mylistitems
        key={item.title}
        dn1={item.title} 
        dn2={item.imgUrl}
        dn3={item.content}
        show={show} />
        

   ) 
    return (
    
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-10 lg:px-2">
        {tags}
     </div>
  )
}
