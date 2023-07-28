import Logo from "../../assets/boldo.svg";
import { SvgBarIcon } from "../../assets/svg";
import Button from "../UI/Button/Button";

const Navbar = () => (
  <nav className='flex items-center justify-between px-4 md:px-32 py-4 md:py-10 bg-transparent'>
    <div>
      <img src={Logo} alt='boldo logo' />
    </div>
    <ul className='hidden md:flex items-center font-semibold gap-7'>
      <li>Product</li>
      <li>Services</li>
      <li>About</li>
      <li>
        <Button className='border-2 border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white transition-colors !text-[16px] px-8 !h-10'>
          Log In
        </Button>
      </li>
    </ul>
    <div className='flex md:hidden'>
      <SvgBarIcon />
    </div>
  </nav>
);

export default Navbar;
