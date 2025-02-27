import Mydiv2 from "./Mydiv2"

export default function Mydiv() {
    let d1="Div1";
    let d2="Div2";
    let d3="Div3";

  return (
    <div className="w-8/10 h-8/10 
        bg-lime-100 
        p-10
        flex flex-col">
        <div>Mydiv1</div>
        <Mydiv2 dn1={d1} dn2={d2} dn3={d3}/>
    </div>
  )
}
