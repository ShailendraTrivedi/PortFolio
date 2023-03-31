import React, { useEffect, useRef } from "react";
import "./animation.css";
import Typed from "typed.js";
const Header = () => {
  const multiTextRef = useRef(null);

  useEffect(() => {
    const typingEffect = new Typed(multiTextRef.current, {
      strings: ["Coder", "WebDeveloper", "Teacher"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);
  return (
    <>
      <div className="flex flex-col h-screen md:h-[150vh] sm:h-[150vh] w-full py-10">
        <div className="flex ml-[50rem] lg:ml-[30rem] md:ml-[10rem] sm:ml-[0rem] p-5">
          <div className="justify-around sm:justify-between items-center flex h-12 w-[50rem] text-2xl text-black gap-5 sm:gap-4">
            <div className="flex gap-10 sm:flex-col sm:gap-2">
              <div className="flex justify-center items-center sm:text-white">
                Home
              </div>
              <div className="flex justify-center items-center sm:text-white">
                About Me
              </div>
            </div>
            <button className="border border-[red] bg-[red] w-[200px] sm:w-[150px] h-[50px] rounded-3xl text-white hover:bg-red-300 cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>
        <div className="grid  grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-full">
          <div className="relative flex justify-center items-center w-full h-fullrounded-full">
            <div className="sm:hidden">
              <div className="absolute animate-pulse top-[28rem] left-[1rem] h-[8rem] w-[8rem] rounded-[80%] bg-[red]" />
              <div className="absolute animate-pulse top-[18rem] left-[6rem] h-[6rem] w-[6rem] rounded-[80%] bg-[red]" />
              <div className="absolute animate-pulse top-[11rem] left-[13rem] h-[4rem] w-[4rem] rounded-[80%] bg-[red]" />
              <div className="absolute animate-pulse top-[6rem] left-[20rem] h-[2rem] w-[2rem] rounded-[80%] bg-[red]" />
              <div className="absolute animate-pulse top-[3rem] left-[27rem] h-[15px] w-[15px] rounded-[80%] bg-[red]" />
            </div>
            <img src="./image/Men.png" alt="" className="bject-contain " />
          </div>
          <div className="">
            <div className="flex flex-col justify-around items-center h-fill gap-8 ">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="flex p-3 text-[100px] sm:text-[60px]">
                  Hy <span className="text-[red]">!</span> I'm
                </div>
                <div className="flex sm:flex-col justify-center items-center p-3 text-[50px] sm:text-[30px]">
                  <div className="">Shailendra</div>
                  <div className="">Trivedi</div>
                </div>
              </div>
              <div className="flex sm:flex-col text-black text-5xl typewriter p-10 justify-center items-center">
                I'm&nbsp;
                <span className="text-[red]" ref={multiTextRef}></span>
              </div>
              <div className="flex sm:flex-col sm:gap-3 justify-between items-center p-5 w-[500px]">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Q9ss7e8VB80qXyiwPxBHBfrW9hCh8G2T/view?usp=share_link"
                >
                  <button className="w-40 h-10 text-white bg-[red] rounded-2xl hover:bg-red-300 cursor-pointer">
                    Download CV
                  </button>
                </a>
                <button className="w-40 h-10 text-white bg-[red] rounded-2xl hover:bg-red-300 cursor-pointer">
                  Hire Me !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
