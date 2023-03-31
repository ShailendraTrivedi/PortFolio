import React from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
const EducAndExp = () => {
  return (
    <div>
      <div className=" xl:h-screen w-screen">
        <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 h-full w-full p-10">
          <div className="flex flex-col ">
            <div className="flex justify-center p-4 sm:p-0 text-5xl">
              <div className="flex flex-col text-5xl gap-2">
                Experience
                <motion.div
                  className="border-2 border-[red] w-[50%] h-1"
                  animate={{
                    width: ["0%", "50%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="border-2 border-[red] w-[50%] h-1"
                  animate={{
                    width: ["100%", "50%", "100%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </div>
            <div className=" h-full">
              <div className=" h-full p-10 sm:p-2">
                <div className="relative flex flex-col  bg-black text-white rounded-xl p-5 sm:p-1 w-full h-full">
                  <motion.div
                    className="absolute border-2 left-[58px] sm:left-[43px] top-[113px] border-[red]"
                    animate={{
                      height: ["0%", "73%"],
                    }}
                    transition={{
                      duration: 2,
                    }}
                  />
                  <div className="flex gap-8 sm:gap-3 p-2 m-2 ">
                    <div className="flex items-center p-4">
                      <FaCircle className="text-[red] " />
                    </div>
                    <div className="flex flex-col h-full w-full justify-between gap-5">
                      <div className="flex font-bold text-4xl sm:text-xl text-[red]">
                        SRMCEM
                      </div>
                      <div className="text-xl  sm:text-lg">
                        Bachelor of Technology
                      </div>
                      <div className="sm:text-base">
                        B.Tech in Electronics and Communications Engineering
                        (ECE)
                      </div>
                      <div className="font-bold text-[red]">2020-2024</div>
                    </div>
                  </div>
                  <div className="flex gap-8 p-2 m-2 ">
                    <div className="flex items-center p-4">
                      <FaCircle className="text-[red] " />
                    </div>
                    <div className="flex flex-col h-full w-full justify-between gap-5">
                      <div className="flex font-bold text-4xl sm:text-xl text-[red]">
                        New Public Inter College
                      </div>
                      <div className="text-xl sm:text-lg">Class XII (CBSE)</div>
                      <div className="">PCM</div>
                      <div className="font-bold text-[red]">2020</div>
                    </div>
                  </div>
                  <div className="flex gap-8 p-2 m-2 ">
                    <div className="flex items-center p-4">
                      <FaCircle className="text-[red] " />
                    </div>
                    <div className="flex flex-col h-full w-full justify-between gap-5">
                      <div className="flex font-bold text-4xl sm:text-xl text-[red]">
                        New Public Inter College
                      </div>
                      <div className="text-xl sm:text-lg">Class XII (CBSE)</div>
                      <div className="font-bold text-[red]">2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-center p-4 text-5xl">
              <div className="flex flex-col text-5xl gap-2">
                Experience
                <motion.div
                  className="border-2 border-[red] w-[50%] h-1"
                  animate={{
                    width: ["0%", "50%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="border-2 border-[red] w-[50%] h-1"
                  animate={{
                    width: ["100%", "50%", "100%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </div>
            <div className=" h-full">
              <div className=" h-full p-10 sm:p-2">
                <div className="relative flex flex-col  bg-black text-white rounded-xl w-full h-full">
                  <motion.div
                    className="absolute border-2 left-[71px] sm:left-[22px] top-[6rem] sm:top-[11rem] border-[red]"
                    animate={{
                      height: ["0%", "30%"],
                    }}
                    transition={{
                      duration: 2,
                    }}
                  />
                  <div className="flex gap-8 p-2 m-10 sm:m-2 ">
                    <div className="flex items-center p-4 sm:p-0">
                      <FaCircle className="text-[red] " />
                    </div>
                    <div className="flex flex-col h-full w-full justify-between gap-5">
                      <div className="flex font-bold text-4xl sm:text-2xl text-[red]">
                        Coding Ninja
                      </div>
                      <div className="text-xl sm:text-lg">
                        Teacher Assistant
                      </div>
                      <div className="sm:text-sm">
                        Internship programs typically provide hands-on learning
                        experiences in a real-world setting, allowing
                        individuals to apply and develop their skills. They
                        often offer mentorship and guidance from experienced
                        professionals, networking opportunities, and the chance
                        to gain valuable work experience in a particular field.
                      </div>
                      <div className="font-bold text-[red]">2020-2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducAndExp;
