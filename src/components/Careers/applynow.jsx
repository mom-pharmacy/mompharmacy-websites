import React from 'react'
const Applynow = () => {
  return (
    <div className="justify-center flex align-center pt-5">
      <div className=" pl-5 pt-5 pr-10 pb-5 rounded-4xl bg-[#F96E83] flex w-250">
        <div>
          <img src="./src/assets/tabletwithslate.png" className="w-30 h-40" />
        </div>
        <div>
        <div className="flex">
          <p className="w-100 text-4xl text-[#FADB14] pl-5">
            mom is calling mom to get back to work
          </p>
          <button className="text-xl h-12 relative left-70 top-13 rounded-3xl bg-white px-4 py-2 ml-2 hover:bg-[#FADB14] hover:text-black">
            apply now
          </button>
        </div>
        <p className="w-180 text-2xl pt-5 text-white pl-5">
          An exclusive program helping women return to the workforce after a
          career break.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Applynow;
