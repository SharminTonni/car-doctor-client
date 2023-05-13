import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navigation from "../Pages/Shared/Navigation";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
