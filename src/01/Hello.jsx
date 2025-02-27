import Hellodate from "./Hellodate"

function Hello(){
    let name = 'pnu';

    return (
        <>
            <h1 className="text-4xl">
                {name ? `${name}님 안녕하세요!` : "이름이 존재하지 않습니다."}
            </h1> 
            <Hellodate />
        </>
    ) 
}

export default Hello
