import Mydiv3 from "./Mydiv3"

export default function Mydiv2(props) {
  return (
    <div className="w-8/10 h-8/10 
        bg-lime-400
        p-10
        flex flex-col justify-start-center items-center">
        <div className="w-full text-left mb-10"> Mydiv2</div>
        {`${props.ds1} > ${props.ds2}`}
        <Mydiv3 ds1={props.ds1} ds2={props.dn2} dn3={props.dn3}/>
    </div>

  )
}
