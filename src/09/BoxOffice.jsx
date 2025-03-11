import { useState, useEffect } from "react"
export default function BoxOffice() {

//   화면에 렌더링 될 상태변수

    const [tags, setTags]=useState([]);

// 일일 박스 오피스 정보 가져오기
    const getFetchData =async()=>{
        const apiKey = ""; // API 키 (보안상 환경 변수로 관리 추천)
        const targetDate = "20250310"; // 조회할 날짜
        
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${targetDate}`;
        console.log(url)

        const resp=await fetch(url);
        const data=await resp.json();

        let boxList= data.boxOfficeResult.dailyBoxOfficeList;
        console.log(boxList)

    } 

    const getYesterday = () => {
        let dt = new Date() ;
        dt.setDate(dt.getDate() - 1) ;

        let year = dt.getFullYear() ;
        let month = String(dt.getMonth() + 1).padStart(2, '0') ;
        let day = String(dt.getDate()).padStart(2,'0') ;
      
        return (year + '-' + month + '-' + day);
      }


// 컴포넌트가 실행될때 한번 fetch
    useEffect(()=>{
        getFetchData();
    },[]);

  return (
    <div>
      BoxOffice
    </div>
  )
}
