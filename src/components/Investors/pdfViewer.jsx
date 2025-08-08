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
    );
}

        

export default PdfViewerComponent;