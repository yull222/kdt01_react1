
export default function TailButton({caption, color, onClick}) {
    const bg = {
      "blue" : "bg-blue-700",
      "orange" : "bg-orange-700",
      "lime" : "bg-red-200",
    }
  
    const bgHover = {
      "blue" : "hover:bg-blue-400",
      "orange" : "hover:bg-orange-400",
      "lime" : "hover:bg-red-200",
    }
    return (
      <button className={`py-2 px-4 mx-2 text-lg hover:font-bold
                         rounded-md text-black
                         ${bg[color]} ${bgHover[color]}`}
               onClick={onClick}>
        {caption}
      </button>
    )
  }
  