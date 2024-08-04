import PropTypes from "prop-types";
import { useEffect } from "react";

const FrameComponent1 = ({ className = "" }) => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes slideRightToLeft {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-slide {
        animation: slideRightToLeft 20s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${className}`}
    >
      <section
        className={`relative overflow-hidden w-full h-[238px] bg-[#b5ddc2] border-[#1e1e1e] border-[2px] border-solid`}
        style={{ zIndex: -1 }}
      >
        <div className="flex items-center whitespace-nowrap animate-slide">
          <span className="inline-block uppercase text-[#1e1e1e] text-[198.4px] font-['ITC_Tiffany_Std'] mq450:text-[79px] mq767:text-[79px]">
            ✦ HORIZON’24 ✦ HORIZON’24 ✦ HORIZON’24 ✦ HORIZON’24 ✦ HORIZON’24 ✦ HORIZON’24
          </span>
        </div>
      </section>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
