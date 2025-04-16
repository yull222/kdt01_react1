import { useLocation, useSearchParams } from "react-router-dom";

export default function RouterPage2() {
  const loc = useLocation();
  const [sParams] = useSearchParams();

  console.log("loc pathname=", loc.pathname);
  console.log("loc search=", loc.search);

 
  let tm = loc.search.replace("?", "").split("&");
  console.log(tm);

 
  let item1 = sParams.get("item1");
  let item2 = sParams.get("item2");

  return (
    <div className="w-full h-full p-5 text-4xl">
      <p>{!item1? "메뉴를 선택하셨습니다." : `${item1}: ${item2}입니다`}</p>
    </div>
  );
}
