import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/banner.jpg";

const Banner = () => {
  const initialTime = 10 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <section className="banner h-[60vh] mt-[14vh] bg-top">
      <div className="max-w-[1400px] mx-auto px-10 px-12 h-full flex flex-col justify-center gap-3">
        {/* Heading */}
        <h1
          className="text-blue-800 uppercase font-bold tracking-tight
          text-4xl sm:text-6xl md:text-7xl lg:text-9xl"
        >
          Big Sale!
        </h1>

        <h2
          className="text-zinc-800 font-bold
          text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
          Up to 40% - Limited Time Only!
        </h2>

        {/* Timer */}
        <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
          {[hours, minutes, seconds].map((val, i) => (
            <React.Fragment key={i}>
              <span
                className="text-white bg-zinc-800 
                px-2 py-1 sm:px-3 sm:py-2 lg:p-3
                text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                {val}
              </span>
              {i < 2 && (
                <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
