import { useHistory } from "react-router-dom";

export const Page01DetailA = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page01DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
