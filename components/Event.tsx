"use client";
import React, { useState, useEffect } from "react";
function convertSecondsToDHMS(seconds:any) {
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds %= 24 * 60 * 60;
  const hours = Math.floor(seconds / (60 * 60));
  seconds %= 60 * 60;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const data = [
    {
      value: days,
      label: 'Days',
      bg: "bg-[rgba(255,102,102,0.25)]",
      border: "border-[rgba(255,102,102,0.9)]"
    },
    {
      value: hours,
      label: 'Hours',
      bg: "bg-[rgba(255,192,0,0.3)]",
      border: "border-[rgba(255,192,0,0.9)]",
    },
    {
      value: minutes,
      label: 'Minutes',
      bg: "bg-[rgba(171,205,82,0.3)]",
      border: "border-[rgba(171,205,82,0.9)]",
    },
    {
      value: remainingSeconds,
      label: 'Seconds',
      bg: "bg-[rgba(26,185,255,0.3)]",
      border: "border-[rgba(26,185,255,0.9)]",
    }
  ];
  return data;
}

function App() {
  const [time, setTime] = useState(75 * 24 * 60 * 60);

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const timeArray = convertSecondsToDHMS(time);

  return (
    <div>
      <div className="bg-hero bg-cover bg-no-repeat">
        <div className="min-h-screen flex flex-col gap-y-2 items-center justify-center relative custom-img bg-[#271344b7] p-[10px] h-[100%]">
          <button className="bg-yellow-500 font-bold py-3 px-4 rounded-full mb-4 sm:text-sm text-xl text-black md:text-lg border-2 font-Fredoka">
            December 31, 2023 at 09:00 AM
          </button>
          <h1 className="text-4xl font-extrabold mb-6 my-4 text-black sm:text-sm md:text-lg font-Fredoka">
            ORGANIZE HALLOWEEN PARTIES FOR KIDS
          </h1>
          <div className="flex flex-wrap justify-around px-5 text-center gap-x-5 sm:gap-y-6 md:gap-y-6">
            {timeArray.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-4 text-center bg-transparent rounded-xl min-w-[120px] w-[20%] overflow-hidden h-[120px] ${item.border} ${"border-[2px]"} ${item.bg} ${item.border} ${"border-t-0 border-l-0 border-r-0"} font-extrabold text-4xl md:text-xl font-Fredoka`}
              >
                <div
                  id="value"
                  className={`text-black h-[60%] flex justify-center items-center ${item.bg} ${item.border} ${"border-[2px]"} ${item.border} ${"border-t-0 border-l-0 border-r-0"} font-extrabold text-4xl md:text-xl font-Fredoka`}
                >
                  {item.value}
                </div>
                <div className={`font-bold text-black sm:text-sm self-center justify-center sm:min-w-[100px] text-xl md:text-sm font-fredoka`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#FF4880] p-3 rounded-xl mt-7 px-[2rem]">
            <button className="text-white font-Fredoka sm:text-sm">View All Events</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
