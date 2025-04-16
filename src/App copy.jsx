import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Link}from "react-router-dom"

import Hello from "./01/Hello"
import Foodmain from "./06/Foodmain"
import BoxOffice from "./09/BoxOffice"
import Gallery from "./13/Gallery"
import Festival from "./14/Festival"
//import RouterMain from "./15/RouterMain"
import MyEffect from "./08/MyEffect"
import Gallery from "./13/Gallery"
import MyRef1 from "./12/MyRef1"
import Traffic from "./10/Traffic"
import BoxOffice from "./09/BoxOffice"
import Festival from "./14/Festival"
import MyEffect from "./08/MyEffect"


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
      
      </header>
    
      <main className="w-full flex-grow
                      pt-10
                      flex flex-col justify-start items-center
                      overflow-y-auto">

                   
      <Routes>
        <Route path="/myeffect" element={<MyEffect  />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/MyRef1" element={<MyRef1 />} />
        <Route path="/Traffic" element={<Traffic />} />
        <Route path="/BoxOffice" element={<BoxOffice />} />
        <Route path="/Festival" element={<Festival />} />
        <Route path="/Hello" element={<Hello />} />

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