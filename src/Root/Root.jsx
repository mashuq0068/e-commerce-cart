import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="container-wrapper">
      <header className=" sticky top-0 z-20 ">
        <Navbar  />
      </header>
      <Outlet />
    </div>
  );
};

export default Root;
