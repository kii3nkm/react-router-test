import { useParams, useLocation } from "react-router-dom";

export const PathParameter = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>PathParameterページです</h1>
      <p>パスパラメーターは {id} です。</p>
      <p>クエリパラメーターは {query.get("name")} です</p>
    </div>
  );
};
