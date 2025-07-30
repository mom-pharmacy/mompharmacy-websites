import React, { useState, useEffect } from "react";
import "@fontsource/fredoka-one";
import "@fontsource/dm-sans";

const details = [
  {
    title: "availability",
    detail:
      "we make it easy to search, order, and receive your medicines — no confusion, no chaos. just clarity.",
    color: "#00A79B",
    delay: 4,
  },
  {
    title: "accessibility",
    detail:
      "we bring care closer. get the help you need, where and when you need it, without the hassle.",
    color: "#00A79B",
    delay: 6,
  },
  {
    title: "affordability",
    detail:
      "we keep prices transparent and affordable — because access to care shouldn't come at a cost to your peace of mind.",
    color: "#00A79B",
    delay: 8,
  },
];

const As = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % details.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row justify-between items-center sm:p-4 md:p-6 lg:p-8 gap-10">
      {/* LEFT - Info Box */}
      <div className="text-left w-full lg:w-[300px]">
        <h3
          className="sm:text-2xl md:text-2xl lg:text-2xl font-bold text-[#00A79B] mb-3"
          style={{ fontFamily: "Fredoka One" }}
        >
          {details[current].title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-dm-sans">
          {details[current].detail}
        </p>
      </div>

      {/* MIDDLE - Arc and Circles */}
      <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <svg
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            id="arcPath"
            d="M450 0 C200 100, 200 500, 450 600"
            stroke="#D1D5DB"
            strokeDasharray="8 10"
            strokeWidth="2"
            fill="none"
          />

          {details.map((item, idx) => (
            <g key={item.title}>
              <circle r="70" fill="white" stroke={item.color} strokeWidth="4">
                <animateMotion
                  dur="6s"
                  begin={`${item.delay}s`}
                  repeatCount="indefinite"
                >
                  <mpath href="#arcPath" />
                </animateMotion>
              </circle>

              <text
                textAnchor="middle"
                fill={item.color}
                fontFamily="Fredoka One"
                fontSize="14"
                dy="5"
              >
                <animateMotion
                  dur="6s"
                  begin={`${item.delay}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href="#arcPath" />
                </animateMotion>
                {item.title}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* RIGHT - Main Circle */}
      <div
        className="z-10 relative border-8 border-[#00A79B] rounded-full shadow-2xl flex flex-col justify-center items-center text-center text-[#00A79B] px-6 py-10"
        style={{
          width: "300px",
          height: "300px",
        }}
      >
        <h2
          className="text-4xl sm:text-5xl font-bold"
          style={{ fontFamily: "Fredoka One" }}
        >
          3a’s
        </h2>
        <p className="sm:text-xl mt-2 font-semibold">triple pillars of care</p>
      </div>
    </div>
  );
};

export default As;