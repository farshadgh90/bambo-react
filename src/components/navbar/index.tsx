import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu } from "./Menu";
import { MenuMobile } from "./MenuMobile";

function Navbar() {
  return (
    <nav className="container px-2 relative bg-transparent mx-auto">
      <div className="border-[rgba(255,255,255,0.2)] border-b-2 flex justify-between items-center px-2 sm:p-0">
        <div className="flex items-center  w-1/4">
          <img src={logo} alt="logo" className="h-6" />
          <Link to={"/"}>
            <h1 className="text-white text-4xl">بامبو</h1>
          </Link>
        </div>
        <Menu />
        <MenuMobile />
      </div>
    </nav>
  );
}
export default Navbar;
