import { useSearchParams } from "react-router-dom";

function List() {
  const [searchParams, setSearchParams] = useSearchParams();
  // 개별 데이터 뜯기
  const id = searchParams.get("id");
  const cate = searchParams.get("cate");

  return (
    <div>
      /blog/list?id={id}&cate={cate} 블러그 목록 (queryString방식)
    </div>
  );
}

export default List;
