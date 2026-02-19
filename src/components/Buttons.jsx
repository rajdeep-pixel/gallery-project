import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Buttons = ({ index, setIndex }) => {
  const totalPages = 100;

  const handlePrev = () => {
    if (index > 1) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < totalPages) setIndex(index + 1);
  };

  return (
    <div className="flex items-center justify-center gap-6">
      <button
        onClick={handlePrev}
        disabled={index === 1}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#222725] text-[#E4E6C3] hover:bg-[#899878] hover:text-[#121113] hover:scale-110 transition-all duration-300 disabled:opacity-40 "
      >
        <ArrowLeft size={24} strokeWidth={2.5} />
      </button>

      <div className="px-6 py-2 rounded-full bg-[#222725]/80 text-[#E4E6C3] font-semibold tracking-wide border border-[#899878]/20">
        Page <span className="text-[#F7F7F2]">{index}</span> of {totalPages}
      </div>

      <button
        onClick={handleNext}
        disabled={index === totalPages}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#222725] text-[#E4E6C3] hover:bg-[#899878] hover:text-[#121113] hover:scale-110 transition-all duration-300 disabled:opacity-40 "
      >
        <ArrowRight size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default Buttons;