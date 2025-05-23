import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Link}from "react-router-dom"
import Hello from "./01/Hello" 
import Lotto from "./05/Lotto"
import Gallery from "./13/Gallery"
import Festival from "./14/Festival"  
import MyRef1 from "./12/MyRef1"
import Traffic from "./10/Traffic"
import BoxOffice from "./09/BoxOffice" 



function App() {
  return ( 
    <BrowserRouter>
    <div className="w-full xl:w-8/10 h-screen mx-auto 
                    flex flex-col">
      <header className="w-full h-20 bg-red-200
                         px-10
                         flex justify-between items-center">

        <div className="text-4xl font-bold text-red-950 flex">
          KDT

        </div>
        
        <ul className="w-full h-16 flex justify-center items-center">
            
            

            <li className="p-2 border rounded-lg border-b-black 
            hover:bg-red-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/Gallery" >Gallery</Link>

            </li>

            <li className="p-2 border rounded-lg border-b-black 
            hover:bg-red-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/MyRef1">MyRef1</Link>

            </li>

            <li className="p-2 border rounded-lg border-b-black 
            hover:bg-red-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/Traffic">Traffic</Link>

            </li>
            <li className="p-2 border rounded-lg border-b-black 
            hover:bg-red-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/Lotto">Lotto</Link>

            </li>
            <li className="p-2 border rounded-lg border-b-black 
            hover:bg-red-300 hover:text-amber-50 mx-4 font-bold">
                <Link to="/BoxOffice">BoxOffice</Link>

            </li>
    </ul>
      </header>
    
      <main className="w-full flex-grow
                      pt-10
                      flex flex-col justify-start items-center
                      overflow-y-auto">

                   
      <Routes> 
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/MyRef1" element={<MyRef1 />} />
        <Route path="/Traffic" element={<Traffic />} />
     
        <Route path="/Festival" element={<Festival />} />
        <Route path="/Hello" element={<Hello />} />
        <Route path="/BoxOffice" element={<BoxOffice />} />

      </Routes>

      
      
        
      </main>
      <footer className="w-full min-h-20 bg-red-200
                         px-10 text-md text-red-950 font-bold
                         flex justify-center items-center">
         [K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정                 
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App