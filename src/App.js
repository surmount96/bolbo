import Layout from "./components/Layout/DefaultLayout";
import Partner from "./components/Homepage/Partner";
import Header from "./components/Homepage/Header";
import Services from "./components/Homepage/Services";
import CustomerContent from "./components/Homepage/Customer";
import Blog from "./components/Homepage/Blog";
import Newsletter from "./components/Homepage/Newsletter";
import { Testimony } from "./components/Homepage/Testimony";
import { Faq } from "./components/Homepage/Faq";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Header />
      <Partner />
      <Services />
      <CustomerContent />
      <Testimony />
      <Faq />
      <Blog />
      <Newsletter />
    </Layout>
  );
}

export default App;
