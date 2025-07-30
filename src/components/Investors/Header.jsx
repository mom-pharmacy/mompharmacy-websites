import React, { useState } from 'react';
import '@fontsource/fredoka-one';
import Button from '../Buttons/Button';
import GlowButton from '../Buttons/GlowButton';
import { motion } from 'framer-motion';
import EnquiryForm from './EnquiryForm';
import PdfViewerComponent from './pdfViewer';

function Header() {
    const [showPdf, setShowPdf] = useState(false);
    const pitchDeck = 'https://drive.google.com/file/d/1VmRHYLCTQ05DZ37zQ8FJHYmFxa-UFR9x/preview';
    const handlePdf = () => setShowPdf(true);
    const handleClosePdf = () => setShowPdf(false);

    return (
        <div
            className="relative h-auto bg-cover bg-center bg-linear-to-r/hsl from-[#01a69b] to-[gray]"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg')" }}
        >
            {/* Content Overlay */}
            <div className='relative z-2 bg-[#00A79B]/80 h-auto flex flex-col md:flex-row items-start justify-between py-10 px-4 gap-10 '>

                {/* Left Side: Header Title and Buttons */}
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start text-left">
                    <h1 className="text-[clamp(2.5rem,8vw,5.625rem)] text-white font-['Fredoka_One']">
                        become a investor
                    </h1>
                    <motion.div
                        className='flex flex-row gap-3 mt-2'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <h2 className="text-[clamp(2.5rem,8vw,5.625rem)] text-[#FADB14] font-['Fredoka_One']">@mom</h2>
                        <h3 className="text-[clamp(2.5rem,8vw,5.625rem)] text-white font-['Fredoka_One']">pharmacy</h3>
                    </motion.div>

                    <div className='flex flex-row gap-5 mt-10'>
                        <GlowButton title="invest in us" link="#form" />
                        <Button title="view pitch deck" onClick={handlePdf} />
                    </div>
                </div>

                {/* Right Side: Enquiry Form at top right */}
                <div className="w-full md:w-1/2 flex justify-end items-start">
                    <div id="form" className="w-full max-w-md">
                        <EnquiryForm />
                    </div>
                </div>
            </div>

            {/* PDF Modal */}
            {showPdf && (
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="relative bg-white rounded-lg w-full max-w-6xl h-[90vh] shadow-xl overflow-hidden">
                        <button
                            className="absolute top-4 right-4 text-white bg-[#00a79b] hover:bg-[#007f76] rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold transition"
                            onClick={handleClosePdf}
                        >
                            &times;
                        </button>
                        <PdfViewerComponent fileUrl={pitchDeck} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
