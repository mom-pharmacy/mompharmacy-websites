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
        <div>
            <div className='bg-[#00A79B] h-auto rounded-2xl py-5'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-[clamp(2.5rem,8vw,5.625rem)] text-white font-['Fredoka_One']">
                        become a investor
                    </h1>
                    <motion.div
                        className='flex flex-row gap-3'
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
                    {showPdf && (
                        <div className="fixed inset-0 backdrop-blur-sm  flex items-center justify-center z-50 p-4">
                            <div className="relative bg-white rounded-lg w-full max-w-6xl h-[90vh] shadow-xl overflow-hidden">
                                <button
                                    className="absolute top-16 right-6 text-white bg-[#00a79b] hover:bg-[#007f76] rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold transition"
                                    onClick={handleClosePdf}
                                >
                                    &times;
                                </button>
                                <PdfViewerComponent fileUrl={pitchDeck} />
                            </div>
                        </div>
                    )}

                </div>

            </div>
            <div id="form" className='mt-10'>
                <EnquiryForm />
            </div>
        </div>
    );
}
export default Header;