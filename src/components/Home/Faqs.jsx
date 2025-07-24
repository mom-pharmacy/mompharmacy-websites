import { q } from "framer-motion/client"
import { useState } from "react"

const faqsList = [
    {
        id: 1,
        question: "what is mom pharmacy?",
        answer: "Mom Pharmacy stands for Medicine on Minutes a fast, reliable, and user-friendly platform that delivers essential medicines and healthcare products within just 10 minutes."
    },
    {
        id: 2,
        question: "what is mom pharmacy?",
        answer: "Mom Pharmacy stands for Medicine on Minutes  a fast, reliable, and user-friendly platform that delivers essential medicines and healthcare products within just 10 minutes."
    },
    {
        id: 3,
        question: "what is mom pharmacy?",
        answer: "Mom Pharmacy stands for Medicine on Minutes  a fast, reliable, and user-friendly platform that delivers essential medicines and healthcare products within just 10 minutes."
    },
    {
        id: 4,
        question: "what is mom pharmacy?",
        answer: "Mom Pharmacy stands for Medicine on Minutes  a fast, reliable, and user-friendly platform that delivers essential medicines and healthcare products within just 10 minutes."
    },
]

function Faqs() {
    //state 
    const [activeAnswer, setActiveAnswer] = useState(null)


    console.log(activeAnswer)

    return <div className="w-[100%] m-auto bg-white pt-20 ">
        <div className="flex items-center justify-center mb-[-20px]">
            <div className="font-bold text-[65px] text-[#00A79B]">
                frequently asked questions?
            </div>
            <div className="animate-bounce">
                <img src="/Home/pillmanFaqs.jpg" alt="pillman" />
            </div>
        </div>
        {faqsList.map(item => <div key={item.id} className="cursor-pointer w-[80%] m-auto py-4 px-6 border-1 border-[#00A79B] shadow-2xs shadow-[#00A79B] mt-5  rounded-xl">
            <div className="flex justify-between items-center">
                <button onClick={() => {
                    console.log("this is logging")
                    setActiveAnswer(item.id)
                }}
                    className="text-[24px] font-medium  cursor-pointer"
                >{item.question} </button>
                <span
                    className="cursor-pointer text-[#00A79B]"
                    onClick={() =>
                        setActiveAnswer(activeAnswer === item.id ? null : item.id)
                    }
                    
                >
                    {activeAnswer === item.id ? '━' : '✚'}
                </span>

            </div>
            {activeAnswer === item.id && <div className=" text-[18px] font-normal">
                <p className="pt-2">{item.answer}</p>
            </div>}
        </div>)}
    </div>
}

export default Faqs