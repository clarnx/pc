// SwiperJS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SwiperSlides } from "@/app/Utils";
import { FaShareAlt } from "react-icons/fa";
import { RiLinksLine } from "react-icons/ri";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Service2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
      id="service-2"
      className="md:flex sm:block md:flex-row justify-center w-full h-[70vh]"
    >
      {/* Left */}
      <div className="sm:w-full md:w-1/2 justify-end pr-8 sm:hidden md:flex">
        <div className="bg-white border border-gray-300 rounded-full h-8 w-8 p-1 flex items-center justify-center relative -left-48">
          <Link href={"#projects"}>
            <AiOutlineArrowDown className="text-gray-300" />
          </Link>
        </div>

        <div data-scroll data-scroll-speed="1" className="absolute">
          <Image
            src={src1}
            alt=""
            height={1000}
            width={1000}
            className=" h-72 w-48 rounded-[30px]"
          />
          <motion.div
            whileHover={{ scale: 1.05, background: "black", color: "white" }}
            whileTap={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            className="relative left-4 bottom-72 mt-2 bg-white rounded-[30px] h-8 w-32 whitespace-nowrap p-1 flex items-center justify-center"
          >
            <Link
              href={"/"}
              className="w-32 flex justify-center items-center gap-1 font-body text-[0.7rem]"
            >
              See more case <RiLinksLine />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* rigth */}
      <div className="md:w-3/4 sm:w-auto px-4">
        <div className="items-center font-body h-10 sm:w-auto md:w-3/4 border border-gray-200 rounded-[30px] text-justify flex justify-center sm:text-base md:text-3xl px-2 whitespace-nowrap">
          02. Wishing to promote your products ?
        </div>
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: "easeIn",
          }}
          className="absolute mt-8"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              // when window width is <= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              // when window width is <= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is <= 2560px
              2560: {
                slidesPerView: 9,
                spaceBetween: 30,
              },
            }}
            className="mySwiper sm:h-[17rem] md:h-[24rem] sm:w-full md:w-[46rem] rounded-[30px]"
          >
            {SwiperSlides.map((swiperslide, key) => (
              <SwiperSlide key={key}>
                <Image
                  src={swiperslide.src}
                  alt={swiperslide.alt}
                  height={1000}
                  width={1000}
                  className=" sm:h-[17rem] md:h-[24rem] sm:w-full md:w-[46rem] rounded-[30px] object-cover relative"
                />

                <div className="flex items-center justify-center text-2xl bg-white text-black h-16 w-16 rounded-full absolute bottom-2 right-2">
                  <Link href={"/"}>
                    <FaShareAlt />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  );
}
const src1 =
  "https://images.pexels.com/photos/11464428/pexels-photo-11464428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
