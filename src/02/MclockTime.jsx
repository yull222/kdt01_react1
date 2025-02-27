function MclockTime(){

    return(
        
        <div className="w-full p-5 text-line-900 text-amber-50 text-4xl">
            현재시각 : {new Date().toLocaleTimeString()}
        </div>
    )
}

export default MclockTime