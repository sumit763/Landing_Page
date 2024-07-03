import React from "react";
import vg from "./assets/menu.png";
import mg from "./assets/mg.svg";
import logo from "./assets/arrow.png";

const App = () => {
  return (
    <div className=" bg-blue-600">
      {/* Navbar */}
      <header className="w-full flex justify-around items-center p-9 ">
        <div className="text-xl text-white font-bold">DIGO</div>
        <nav className="space-x-10 ">
          <a
            href="#home"
            className="text-white hover:bg-black px-4 py-1  rounded-3xl"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:bg-black px-4 py-1  rounded-3xl"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white hover:bg-black px-4 py-1  rounded-3xl"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white hover:bg-black px-4 py-1  rounded-3xl"
          >
            Contact
          </a>
        </nav>
        <div className="invert size-10">
          <img src={vg} alt="star" />
        </div>
      </header>
      {/* body */}
      <div className=" text-white w-full h-lvh ">
        <div className="max-w-screen-xl  mx-auto p-6 flex justify-between w-full h-1/3 ">
          <div className="text-center w-2/3 flex flex-wrap ">
            <h1 className="text-6xl  font-bold">DIGITAL DREAMS</h1>

            <h1 className="text-6xl  font-bold flex flex-wrap ">
              <div className="h-12 w-12   bg-white rounded-full invert p-1 m-3 ">
                <img src={mg} alt="star" />
              </div>
              REAL RESULTS
            </h1>
          </div>
          <div className="mt-6 text-[16px] text-left w-1/3">
            <p>
              Stay Informed, Stay Ahead: Unveiling the Future of Technology,
              Gadgets, and Innovation
            </p>
            <p>
              Your Gateway to the Digital Universe - Where Innovation Meets
              Insight
            </p>
            <button className="mt-6 px-8 py-2 bg-white text-black rounded-full ">
              Get Started
            </button>
          </div>
        </div>
        <div className=" w-full h-2/3 bg-slate-200 rounded-t-[4rem] flex justify-end mt-10">
          <div className=" w-36 h-36 rounded-full bg-black mr-32 -mt-10 z-10 border-blue-600 border-[10px] flex justify-center items-center ">
            <div className="h-20 w-20 invert rotate-[310deg]   rounded-full  p-2 m-3 ">
              <img src={logo} alt="star" />
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="text-white py-4 h-[90px] bg-black">
        <div className="text-[2.7rem] flex bg-black items-center justify-evenly   ">
          <marquee direction="left" loop="5">
            <span className="flex items-center space-x-2">
              <span className=" size-12 pt-2  invert   flex items-center justify-center">
                <img src={mg} alt="star" />
              </span>
              <h1>DIGITAL MARKETING COMPANY</h1>
              <span className=" size-12 pt-2  invert   flex items-center justify-center">
                <img src={mg} alt="star" />
              </span>
              <h1>DIGITAL MARKETING COMPANY</h1>
            </span>
          </marquee>
        </div>
      </div>
      {/* END */}
    </div>
  );
};

export default App;
