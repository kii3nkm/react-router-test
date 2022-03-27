import { Page02 } from "../Page02";
import { PathParameter } from "../PathParameter";

export const page02Routes = [
  {
    path: "/",
    exact: true,
    children: <Page02 />
  },
  {
    path: "/:id", // <- パスパラメーターの指定方法
    exact: false,
    children: <PathParameter />
  }
];
