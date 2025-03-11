
import Mclock from "./02/Mclock"

function App() {
  return (
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
                   
         <Mclock />
        
      </main>
      <footer className="w-full min-h-20 bg-red-200
                         px-10 text-md text-red-950 font-bold
                         flex justify-center items-center">
         [K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정                 
      </footer>
    </div>
  )
}

export default App