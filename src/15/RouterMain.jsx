import RouterPage1 from "./RouterPage1"
import RouterPage2 from "./RouterPage2"
import RouterHome from "./RouterHome"
import RouteNav from "./RouteNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function RouterMain() {
  return (
    
    <BrowserRouter>
    <div className="w-full flex flex-col mx-4 justify-center items-center bg-amber-100">
        <RouteNav />
    </div>
    <div>
        <Routes>
            <Route path="/" element={<RouterHome />} />
            <Route path="/p1/:item1/:item2" element={<RouterPage1 />} />
            <Route path="/p2" element={<RouterPage2 />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}
