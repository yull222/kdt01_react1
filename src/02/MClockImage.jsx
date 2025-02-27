import clock from "../02/clock.png"; // 경로 수정

function MClockImage(){
    return(
        <div className="flex text-sm items-center mx-5">
            <img src={clock} alt="Clock" className="w-8" />
        </div>
    )
}
export default MClockImage;