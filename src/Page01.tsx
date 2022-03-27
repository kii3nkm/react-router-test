import { Link } from "react-router-dom";

export const Page01 = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div>
      <h1>Page01ページです</h1>
      <Link to={{ pathname: "/page01/detailA", state: arr }}>DetailA</Link>
      {/* <br />
      <Link to="/page01/detailB">DetailB</Link> */}
    </div>
  );
};
