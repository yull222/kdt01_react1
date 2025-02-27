export default function Mydiv3(props) {
  return (
    <div className="w-8/10 h-8/10 
        bg-lime-500 
        p-10
        flex flex-col justify-start-center items-center">
        
        <div className="w-full text-left mb-10"> Mydiv3</div>
        {'${props.ds1} > ${props.ds2} > ${props.ds3}'}
    </div>
  )
}
