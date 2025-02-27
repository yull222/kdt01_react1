import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Hello from "./01/Hello"
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
import Mylist from './04/Mylist';
import { FaHome } from "react-icons/fa";
function App() {
  return (
    <div className="w-full xl:w-8/10 h-screen mx-auto 
                    flex flex-col">
      <header className="w-full h-20 bg-red-200
                         px-10
                         flex justify-between items-center">

        <div className="text-4xl font-bold text-red-500 flex">
          리액트 연습
          
        </div>
        <div className="text-3xl font-bold text-black">
          <FaHome />
        </div>
      </header>
      <main className="w-full flex-grow
                      pt-10
                      flex flex-col justify-start items-center
                      overflow-y-auto">

        {/* <Hello />   */}
        {/* <MyClock /> */}
        {/* <MyDiv1 /> */}
        <Mylist />
      </main>
      <footer className="w-full min-h-20 bg-lime-900
                         px-10 text-md text-lime-50 font-bold
                         flex justify-center items-center">
         [K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정                 
      </footer>
    </div>
  )
}

export default App