import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function PdfViewerComponent({ fileUrl }) {
    return (
        // for google drive link
        <iframe
            src={fileUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Pitch Deck Viewer"
        />
        // // for local pdf file
        // <div style={{ height: '750px', width: '100%' }}> 
        //     <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"> 
        //         <Viewer fileUrl={fileUrl} />
        //     </Worker>
        // </div>
    );
}

        

export default PdfViewerComponent;