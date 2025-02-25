import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaAppleWhole } from "react-icons/fa6";
function App() {

  return (
    <div className='wfull h-full bg-amber-100'> 
      <div className='wfull flex justify-center items-center p-30'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 class name="font-bold text-4xl">
      Vite + React</h1>
      <div className="card">
        <p>
          이유리
        </p>
      </div>

      <p className="read-the-docs wfull flex justify-center items-center text-8xl text-red-100">

        <FaAppleWhole />
      </p>
    </div>
  )
}

export default App
