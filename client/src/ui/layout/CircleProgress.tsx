import { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { FaArrowUp } from "react-icons/fa6";

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export default function CircleProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScrollProgress() {
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollValue = Math.round((pos * 100) / calcHeight);
      setProgress(scrollValue);
    }

    window.addEventListener("scroll", handleScrollProgress);

    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  return (
    <div
      className={`fixed right-10 z-50 h-12 w-12 cursor-pointer transition-all ${progress > 10 ? "pointer-events-auto bottom-10 opacity-100" : "pointer-events-none bottom-8 opacity-0"}`}
      onClick={scrollToTop}
    >
      <CircularProgressbarWithChildren
        value={progress}
        styles={{
          path: {
            stroke: "#3f6212",
            strokeWidth: "8px",
            transition: "stroke-dashoffset 0.2s linear 0s",
          },
          text: {
            fontSize: "40px",
            fill: "#3f6212",
          },
        }}
      >
        <span className="text-xl text-lime-800">
          <FaArrowUp />
        </span>
      </CircularProgressbarWithChildren>
    </div>
  );
}
