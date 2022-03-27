import { Link } from "react-router-dom";

export const Page02 = () => {
  return (
    <div>
      <h1>Page02ページです</h1>
      <Link to="/page02/100">Path Parameter</Link>
      <br />
      <Link to="/page02/100?name=hoge">Query Parameter</Link>
    </div>
  );
};
