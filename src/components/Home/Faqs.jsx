import { q } from "framer-motion/client"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { MdAdd } from "react-icons/md"

const faqsList = [
    {
        id: 1,
        question: "what is mom pharmacy?",
        answer: "Mom Pharmacy stands for Medicine on Minutes a fast, reliable, and user-friendly platform that delivers essential medicines and healthcare products within just 10 minutes."
    },
    {
        id: 2,
        question: "will you really deliver medicines on 10minutes ?",
        answer: "yes, we aim to deliver within 10 minutes in supported zones with ready stock.delivery time may vary slightly based on location, traffic, and availability."
    },
    {
        id: 3,
        question: "what if delivery is delayed ?",
        answer: "if delivery is delayed, our support team will notify you with updates in real-time.you can also track your order status or contact us directly for assistance."
    },
    {
        id: 4,
        question: "how can we place the order ?",
        answer: "you can place the order through our website or mobile app in just a few clicks. simply upload your prescription, select your items, and proceed to checkout."
    },
    {
        id: 5,
        question: "what areas do we serve ?",
        answer: "we proudly serve across multiple cities in india, delivering medicines quickly and reliably.our service areas include urban, suburban, and semi-urban regions for maximum reach."
    },
    {
        id: 6,
        question: "how can you contact us ?",
        answer: "you can contact us via WhatsApp or by filling out the contact form on our website , we are available 24/7 to assist you with queries"
    },
]

function Faqs() {
    //state 
    const [activeAnswer, setActiveAnswer] = useState(null)


    console.log(activeAnswer)

    return <div className=" xl:w-[80%] md:w-[90%] w-[90%] m-auto bg-white xl:pt-20 md:pt-10 pt-15 ">
        <div className="flex items-center justify-center xl:mb-[-20px] md:mb-[-20px] mb-0">
            <div className="font-bold xl:text-[65px] text-[25px] md:text-[40px] text-[#00A79B] text-center ">
                frequently asked questions?
            </div>
            <div className="animate-bounce ">
                <img src="/Home/pillmanFaqs.jpg" alt="pillman" />
            </div>
        </div>
        {faqsList.map(item => <div key={item.id} className="cursor-pointer m-auto py-4 px-6 border-1 border-[#00A79B] shadow-2xs shadow-[#00A79B] xl:mt-5 md:mt-4 mt-4 rounded-xl">
            <div className="flex justify-between items-center">
                <button onClick={() => {
                    console.log("this is logging")
                    setActiveAnswer(item.id)
                }}
                    className="xl:text-[24px] md:text-[24px] text-[20px] text-start font-medium  cursor-pointer"
                >{item.question} </button>
                <span
                    className="cursor-pointer text-[#00A79B]"
                    onClick={() =>
                        setActiveAnswer(activeAnswer === item.id ? null : item.id)
                    }

                >
                    {activeAnswer === item.id ? <AiOutlineClose size={24} color="#00a99d" /> :  <MdAdd size={25} color="#00a99d" />}
                </span>

            </div>
            {activeAnswer === item.id && <div className=" text-[18px] font-normal">
                <p className="pt-2">{item.answer}</p>
            </div>}
        </div>)}
    </div>
}

export default Faqs