"use client";

import React, { useEffect, useState } from "react";

interface LiquidGaugeProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

const LiquidGauge: React.FC<LiquidGaugeProps> = ({
  initialValue = 50,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Outer circle container */}
      <div
        className="relative flex items-center justify-center w-32 h-32 border-4 rounded-full"
        style={{
          borderColor:
            value === 100 ? "#a6cf98" : "hsla(195.08, 78.54%, 45.69%, 1)",
          backgroundColor: "#gray",
        }}
        data-value={value}
      >
        {/* Inner circle */}
        <div className="relative flex items-center justify-center w-[115px] h-[115px] rounded-full bg-gray-200 overflow-hidden">
          {/* Wave indicators */}
          <div
            className="absolute w-[250px] h-[250px] rounded-[100px] animate-[wave_8s_linear_infinite]"
            style={{
              backgroundColor:
                value === 100 ? "#557c55" : "hsla(195.08, 78.54%, 35.69%, 0.6)",
              top: `calc(100% - ${value}%)`,
              left: "-50%",
              right: "50%",
              transformOrigin: "center center",
            }}
          />
          <div
            className="absolute w-[250px] h-[250px] rounded-[100px] animate-[wave_8s_linear_infinite] rotate-90"
            style={{
              backgroundColor:
                value === 100 ? "#a6cf98" : "hsla(195.08, 78.54%, 45.69%, 1)",
              top: `calc(100% - ${value}%)`,
              left: "-50%",
              right: "50%",
              transformOrigin: "center center",
            }}
          />

          {/* Center dot */}
          <div
            className={`absolute left-1/2 top-1/2 min-w-1 min-h-1 rounded-full -translate-x-1/2 -translate-y-1/2
              ${value === 100 ? "animate-firework" : ""}`}
            style={{
              width: "30%",
              height: "30%",
            }}
          />
        </div>

        {/* Label */}
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] text-center overflow-hidden
            ${value > 50 ? "text-gray-100" : "text-black"}`}
        >
          <strong className="text-2xl">{value}</strong>
          <span className="text-xl">%</span>
        </span>
      </div>

      {/* Optional input (commented out) */}
      {/* <div className="flex items-center justify-between w-48">
        <span>progress percentage is</span>
        <input
          type="number"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={handleInputChange}
          className="max-w-[30%] px-2 py-1 border rounded"
        />
        <span>%</span>
      </div> */}
    </div>
  );
};

export default LiquidGauge;
