import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const createData = async (e) => {
    if (firstName === "" || lastName === "" || email === "" || text === "") {
      alert("Please fill all sections !!! ");
      return;
    }
    await addDoc(collection(db, "details"), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      text: text,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setText("");
  };
  return (
    <>
      <div className="bg-black text-white sm:p-2 xl:p-10  min-h-screen grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-around gap-10">
        <div className="bg-black flex flex-col m-5 justify-center items-center gap-20">
          <div className="flex flex-col bg-black text-5xl p-3 gap-2">
            Contact Me
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
          <img src="./image/Contact.jpg" alt="" className="w-full" />
        </div>
        <div className="flex flex-col text-black rounded-xl m-5">
          <div className="flex flex-col gap-5 p-5 bg-white border-4 border-[red] rounded-xl h-full w-full justify-center">
            <div className="flex justify-center text-3xl">Details</div>
            <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-xl">First Name :</div>
                <input
                  type="text"
                  className="border-black border-2 rounded-xl w-full xl:w-[17rem] p-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-xl">Last Name :</div>
                <input
                  type="text"
                  className="border-black border-2 rounded-xl w-full xl:w-[17rem] p-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl">Email :</div>
              <input
                type="email"
                className="border-black border-2 rounded-xl w-full p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl">Message :</div>
              <textarea
                type="text"
                className="border-black border-2 rounded-xl w-full h-[10rem] p-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="border-4 border-black rounded-3xl bg-[red] h-[4rem] w-[10rem]"
                onClick={createData}
              >
                Submit
              </button>
            </div>
            <div className="text-xl"> 😄 Thanks for submission !</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
