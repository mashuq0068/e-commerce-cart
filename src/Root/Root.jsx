import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="container-wrapper">
      <header className="mb-8 lg:mb-12">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default Root;
