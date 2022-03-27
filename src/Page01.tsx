import { Link, useHistory } from "react-router-dom";

export const Page01 = () => {
  const history = useHistory();
  const onClickDetailA = () => history.push("/page01/detailA");

  return (
    <div>
      <h1>Page01ページです</h1>
      <Link to="/page01/detailA">DetailA</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
