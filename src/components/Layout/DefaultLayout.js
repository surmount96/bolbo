import Footer from "../Inc/Footer";
import Navbar from "../Inc/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
