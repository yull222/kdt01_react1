import TailCard from "../UI/TailCard"
import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react"

export default function Gallery() {

   const[photo,setPhoto]=useState([]);

  //키워드 입력 
  const refInput = useRef();

  //확인
  const handleClick = async () => {
    const keyword = encodeURI(refInput.current.value.trim());
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?numOfRows=10&_type=json&pageNo=1&MobileOS=ETC&MobileApp=KTOUR&arrange=A&keyword=${keyword}&serviceKey=${apiKey}`;
  
    console.log("API 요청 URL:", url); 
  
    try {
      const response = await fetch(url);
      const data = await response.json(); 

      if (data.response.body.items.item) {
        setPhoto(data.response.body.items.item); // 검색 결과 저장????
      } else {
        setPhoto([]); // 오류나서 초기화 하는 부분 만들었음.
        alert("검색 결과가 없습니다.");
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  
  
     
    
  };
  


  //취소
  const handleReset = () => {
    refInput.current.value = '' ;
    refInput.current.focus();
    setPhoto([]);
  }
 

  //랜더링 시 포커스 
  useEffect(()=>{
    refInput.current.focus();
  }, []) ;

  return (
    <div className="w-10/12 flex flex-col justify-start items-center">
      <h1 className="w-full text-3xl font-bold text-center mt-5 mb-10">
        한국관광공사 관광사진 정보
      </h1>
      <div className="w-full bg-lime-100 p-5 grid grid-cols-1 md:grid-cols-3">


      
        <TailInput type = "text"
                   id = "txt1"
                   ref = {refInput}
                   onFocus = {()=>{}} />
        <TailButton caption="확인"
                    color="blue"
                    onClick={handleClick} />
        <TailButton caption="취소"
                    color="blue"
                    onClick={handleReset} />
      </div>
      <div className="w-full p-10 grid grid-cols-1 md:grid-cols-3 gap-2">
      {photo.length > 0 ? (photo.map((photo) => (
        <TailCard key={photo.galContentId} className="p-4 "
        title={photo.galTitle}  subtitle={photo.galPhotographyLocation}  imgurl={photo.galWebImageUrl}  kws={photo.galSearchKeyword}>
            <img src={photo.galWebImageUrl} alt={photo.galTitle}/>

        </TailCard>
         ))) : (<p>검색 결과가 없습니다.</p>)}
        
      </div>
    </div>
  )
}




