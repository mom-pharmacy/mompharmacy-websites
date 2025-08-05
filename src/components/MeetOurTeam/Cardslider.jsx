import React, { useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CardComp from "./Cardcomp";
import Profilecard from "./profilecard";


export default function CardSlider() {
    const [activeIndex, setActiveIndex] = useState(2);
    const [activeProfile , setActiveProfile] = useState(null)

    const [employeeDetails , setEmployeeDetails] = useState(null)
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)
 
    
    useEffect(()=>{
        async function getEmployeeDetails(){
            try{
                setLoading(true)
                const res = await fetch('http://localhost:3000/employee/allemployees')
                setLoading(false)
                if(!res.ok){
                    setError(true)
                    return 
                }
                const data =  await res.json()
                console.log("this is response from employee details" , data)
                const formatedArray = data.data.map(item=>({
                    name:item.employeeName , 
                    designation:item.employeedesignation , 
                    img:item.employeeUrl , 
                    id:item._id
                }))
                setEmployeeDetails(formatedArray)
            }
            catch(e){
                console.log("this is error" , e)
                setError(true)
            }
        }

        getEmployeeDetails()     
    } , [])



    return (
        <div className="w-full">
           {activeProfile && <Profilecard setActiveProfile={setActiveProfile} activeProfile={activeProfile}/>}
            <p className="text-center mt-20 text-[#00A79B] text-5xl font-bold font-['fredoka_one']">experts</p>
            <div className="text-center text-black-500 text-2xl p-4">departments across</div>
            <div className="relative max-w-4xl md:max-w-3xl w-full  mx-auto py-16 px-2">
                {employeeDetails && <Swiper
  centeredSlides={true}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  navigation={{
    nextEl: ".next-arrow",
    prevEl: ".prev-arrow",
  }}
  modules={[Navigation]}
  loop={true}
  className="overflow-visible h-70"
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
>
  {employeeDetails.map((person, index) => (
    <SwiperSlide key={index} className="flex justify-center w-full">
      <CardComp
        name={person.name}
        designation={person.designation}
        img={person.img}
        about={person.About}
        isActive={index === activeIndex}
        id={person.id}
        setActiveProfile={setActiveProfile}
      />
    </SwiperSlide>
  ))}
</Swiper>

                }


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
