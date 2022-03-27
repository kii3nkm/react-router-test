import { useParams } from "react-router-dom";

export const PathParameter = () => {
  const { id } = useParams<{ id: string | undefined }>();
  return (
    <div>
      <h1>PathParameterページです</h1>
      <p>パスパラメーターは {id} です。</p>
    </div>
  );
};
