import { useLocation } from "react-router-dom";

export const Page01DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Page01DetailAページです</h1>
    </div>
  );
};
