import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavbarMobile from "../Navbar/NavbarMobile";
const Layout = () => {
  return (
    <section>
      <div className="flex">
         <div className="w-[3.9rem] hidden lg:block bg-orange-400">
        <Navbar className='hidden '/>
      </div>
      
      <div className="w-full bg-red-900 h-full relative">
         <div>
          <NavbarMobile/>
        <Home />
        <Footer />
      </div>
      </div>
      </div>
     
     
    </section>
  );
};

export default Layout;
