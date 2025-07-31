import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CardComp from "./Cardcomp";

const team = [
    { name: "Gnaneswar ", designation: "Full Stack Developer", img: "/public/developer.png", About:"=" },
    { name: "Charan ", designation: "Full Stack Developer ", img: "/public/developer.png" },
    { name: " Priya", designation: "Data Analaysts", img: "/public/developer.png" },
    { name: "Sai", designation: "Tester", img: "/public/developer.png" },
    { name: "Nandini", designation: "Ui/Ux", img: "/public/developer.png" },
    { name: "Udai Sai", designation: "Full Stack Developer", img: "/public/developer.png" },
];

export default function CardSlider() {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div className="w-full"> 
            <p className="text-center mt-20 text-[#00A79B] text-5xl font-bold">Meet Our Team</p>
            <div className="relative max-w-3xl mx-auto py-16 px-2">
                <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    centeredSlides={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    navigation={{
                        nextEl: ".next-arrow",
                        prevEl: ".prev-arrow",
                    }}
                    modules={[Navigation]}
                    loop={true}
                    className="overflow-visible h-80">
                    {team.map((person, index) => (
                        <SwiperSlide key={index}>
                            <CardComp
    name={person.name}
    designation={person.designation}
    img={person.img}
    about={person.About}
    isActive={index === activeIndex}
/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-6">
                    <button className="prev-arrow h-12 w-12 rounded-full border border-black flex items-center justify-center hover:scale-110 transition">
                        <FaArrowLeft />
                    </button>
                    <button className="next-arrow h-12 w-12 rounded-full border border-black flex items-center justify-center hover:scale-110 transition">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
