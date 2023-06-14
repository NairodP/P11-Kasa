// import App from "../App";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
