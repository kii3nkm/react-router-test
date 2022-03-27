import { Page01 } from "../Page01";
import { Page01DetailA } from "../Page01DetailA";

export const page01Routes = [
  {
    path: "/",
    exact: true,
    children: <Page01 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page01DetailA />
  }
];
