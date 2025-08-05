
// import React, { useEffect, useRef } from 'react';

// const GoogleTranslate = () => {
//   const googleTranslateRef = useRef(null);

//   useEffect(() => {
   
//     if (window.google && window.google.translate && googleTranslateRef.current && !googleTranslateRef.current.hasChildNodes()) {
//         new window.google.translate.TranslateElement(
//           {
//             pageLanguage: 'en',
//             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//           },
//           'google_translate_element' 
//         );
//     }
//   }, []); 

//   return (
//     <div id="google_translate_element" ref={googleTranslateRef}></div>
//   );
// };

// export default GoogleTranslate;
