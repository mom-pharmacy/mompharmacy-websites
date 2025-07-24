// import React from 'react'
// import Image from '../../assets/Careerpage/tablets.png'


// const Welcome = () => {
//     return (
//       <div className="bg-[#00a79b] h-200 width-800px">
//         <div className="text-center">
//           <p className="text-white text-7xl font-bold pt-30">
//             welcome to careers
//           </p>
//           <p className="text-yellow-300 text-7xl font-bold p-5">
//             @mom pharmacy
//           </p>
//           <p className="text-white text-7xl font-bold">let's work together</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="flex-1 p-10">
//             <button className='text-black bg-white hover:bg-yellow-300 text-3xl font-semibold  h-15 w-60 rounded-full'><p className='text-center'>explore jobs</p></button>
        
        
//           </div>
//           <div className="flex-1 mb-100">
//             <img src={Image} className="h-50 w-120" />
//           </div>
//         </div>
//       </div>
//     );
// };
// export default Welcome

import React from "react";
import Image from "../../assets/Careerpage/tablets.png";

const Welcome = () => {
  return (
    <div className="bg-[#00a79b] w-full py-10 px-4">
      {/* Text Section */}
      <div className="text-center space-y-4 mb-10">
        <p className="text-white text-4xl md:text-5xl lg:text-7xl font-bold">
          welcome to careers
        </p>
        <p className="text-yellow-300 text-4xl md:text-5xl lg:text-7xl font-bold">
          @mom pharmacy
        </p>
        <p className="text-white text-3xl md:text-4xl lg:text-6xl font-bold">
          let's work together
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center mb-6">
        <button className="text-black bg-white hover:bg-yellow-300 text-xl md:text-2xl lg:text-3xl font-semibold px-6 py-3 rounded-full transition duration-300">
          explore jobs
        </button>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={Image}
          alt="tablets"
          className="w-60 md:w-80 lg:w-[450px] h-auto"
        />
      </div>
    </div>
  );
};

export default Welcome;
