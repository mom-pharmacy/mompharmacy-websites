import React from "react";

function Flowwork(props) {
  return (
    <>
      <div className=" flex flex-col  text-5xl font-bold text-[#00A79B]  ">
        <div className="  flex justify-end ">
          <div className="text-end mr-10">
            <h1 className="text-4xl  text-[#00A79B] font-semibold ">
              {props.name}
            </h1>
            <h1 className="text-2xl  text-black font-normal ">
              {props.subname}
            </h1>
          </div>
          <div>
            <img src={props.img} className="h-30 w-30 mr-10 transition-transform duration-500 hover:scale-125" />
          </div>
        </div>
      </div>
      <div>
        <img src="/Home/line2.png " className="w-350 ml-10 " />
      </div>
    </>
  );
}

export default Flowwork;
