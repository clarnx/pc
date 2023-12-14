import "../index.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoShareSocial } from "react-icons/io5";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function Services() {
  return (
    <>
      <motion.div
        initial={{ backgroundColor: "#000" }}
        whileInView={{ backgroundColor: "#fff" }}
        transition={{ duration: 1, delay: 0.3, ease: "linear" }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="p-8 w-full md:h-screen"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "anticipate", duration: 1, delay: 1 }}
          className="font-roboto text-gray-400 text-xl"
        >
          services
        </motion.div>

        <div className="flex sm:flex-col md:flex-row justify-between w-full">

          {/* Left */}
          <div className="font-body">
            <div className="flex sm:flex-row md:flex-col gap-2 flex-col sm:text-base md:text-8xl">
              <div className="flex sm:gap-2 md:gap-4">
                <div className="flex">
                  <motion.div
                    initial={{ opacity: 0, x: "-10px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      duration: 1,
                      delay: 1,
                    }}
                  >
                    T
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: "-10px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      duration: 1,
                      delay: 1.1,
                    }}
                  >
                    i
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: "-10px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      duration: 1,
                      delay: 1.2,
                    }}
                  >
                    m
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: "-10px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      duration: 1,
                      delay: 1.3,
                    }}
                  >
                    e
                  </motion.div>
                </div>
                <div className="flex">
                  <motion.div
                    initial={{ opacity: 0, x: "-10px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      duration: 1,
                      delay: 1.4,
                    }}
                  >
                    t
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: "-10px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      duration: 1,
                      delay: 2,
                    }}
                  >
                    o
                  </motion.div>
                </div>
              </div>

              <div className="flex">
                <motion.div
                  initial={{ opacity: 0, x: "-10px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 1,
                    delay: 2.1,
                  }}
                >
                  c
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "-100px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 1,
                    delay: 2.5,
                  }}
                >
                  r
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "-100px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 1,
                    delay: 2.6,
                  }}
                >
                  e
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "-100px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 1,
                    delay: 2.7,
                  }}
                >
                  a
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "-100px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 1,
                    delay: 2.8,
                  }}
                >
                  t
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "-100px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 1,
                    delay: 2.9,
                  }}
                >
                  e
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", duraion: 0.3, delay: 1 }}
              className="sm:text-base md:text-8xl"
            >
              Business.
            </motion.div>
          </div>

          {/* right */}
          <div className="sm:w-auto md:w-3/4 sm:pl-0 md:pl-8">
            <div className="flex sm:gap-2 md:gap-8 items-center justify-center sm:mt-6 md:mt-0">
              <div className="flex sm:flex-row md:flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "anticipate", duration: 1, delay: 1 }}
                  className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center sm:mt-0 md:mt-4 cursor-pointer"
                >
                  <Link href={"#about"}>
                    <motion.div initial={{ y: 0 }} whileHover={{ y: "-5px" }}>
                      <AiOutlineArrowUp />
                    </motion.div>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="h-10 w-10 rounded-full border border-black flex items-center justify-center sm: md:mt-4 cursor-pointer"
                >
                  <Link href={"#service-2"}>
                    <motion.div initial={{ y: 0 }} whileHover={{ y: "5px" }}>
                      <AiOutlineArrowDown />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "anticipate", duration: 1, delay: 1 }}
                className="font-body h-10 w-3/4 border border-gray-200 rounded-[30px] text-justify flex items-center justify-center sm:text-[13px] md:text-3xl whitespace-nowrap"
              >
                01. Digitized operation manuals.
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: "100px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeIn",
                damping: 10,
                stiffness: 300,
              }}
              className="sm:pl-0 md:pl-16 relative"
            >
              <Image
                src={src}
                alt=""
                height={1000}
                width={1000}
                className="sm:h-[17rem] md:h-[24rem] w-[46rem] rounded-[15px] mt-4 object-cover"
              />

              <motion.div
                initial={{ scale: 0 }}
                onHoverStart={{ scale: 1.05 }}
                onHoverEnd={{ scale: 1.1 }}
                transition={{ damping: 10 }}
                className="absolute right-4 bottom-4 bg-white h-12 w-12 rounded-full flex justify-center items-center"
              >
                <IoShareSocial className="text-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

const src =
  "https://images.pexels.com/photos/7562114/pexels-photo-7562114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
