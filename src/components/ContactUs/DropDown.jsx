
import { motion } from "framer-motion";
import { useState } from "react";
import {
    FiChevronDown,

} from "react-icons/fi";

const StaggeredDropDown = ({ onSelect, selectedValue }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="py-3 flex items-center justify-center bg-white">
            <motion.div animate={open ? "open" : "closed"} className="relative w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="w-full flex justify-between rounded-md text-lg p-3 text-white bg-[#00A79B] hover:bg-[#00A79B] transition-colors"
                >
                    <span>{selectedValue || "select support type"}</span>
                    <motion.span variants={iconVariants}
                        className="flex mt-2" >
                        <FiChevronDown />
                    </motion.span>
                </button>

                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-50%" }}
                    className="w-full flex flex-col gap-2 p-2 rounded-lg bg-white shadow-[0_0_5px_0_rgba(56,178,172,1)] absolute top-[120%] left-[50%] overflow-hidden"
                >
                    <Option setOpen={setOpen} text="suggestion" onSelect={onSelect}
                    />
                    <Option setOpen={setOpen} text="grievance" onSelect={onSelect} />

                </motion.ul>
            </motion.div>
        </div>
    );
};

const Option = ({ text, setOpen,onSelect }) => {
    const handleClick=()=>{
        setOpen(false);
        if(onSelect) onSelect(text)
    }
    return (
        <motion.li
            variants={itemVariants}
            onClick={handleClick}
             className="flex items-center gap-1 w-full p-2 text-lg whitespace-nowrap rounded-md hover:bg-teal-100 text-slate-700 hover:text-teal-600 transition-colors cursor-pointer" // Increased padding for better touch target
     >
            <span>{text}</span>
        </motion.li>
    );
};

export default StaggeredDropDown;

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};
