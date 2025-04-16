import {Link}from "react-router-dom"
export default function RouteNav() {

  return (
    <ul className="w-full h-16 flex justify-center items-center">
            
            <li className="p-2 border rounded-lg border-b-black 
            hover:bg-red-300 hover:text-amber-50 mx-4 font-bold " >
                <Link to="/" className="w-full">Home</Link>
            </li>

            <li className="p-2 border rounded-lg border-b-black 
            hover:bg-red-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/p1" >Page1</Link>

            </li>

            <li className="p-2 border rounded-lg border-b-black 
            hover:bg-red-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/p2">Page2</Link>

            </li>
    </ul>
  )
}
