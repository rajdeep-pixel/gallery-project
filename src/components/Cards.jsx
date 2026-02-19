import React from "react";

const Cards = ({ elem }) => {
  return (
    <a 
      href={elem.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative group overflow-hidden rounded-xl cursor-pointer block w-64 h-64"
    >
      <img
        src={elem.download_url}
        alt={elem.author}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur-[3px]"
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-[#121113]/95 via-[#121113]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-4">

        <h2 className="text-[#E4E6C3] text-lg font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {elem.author}
        </h2>
      </div>
    </a>
  );
};

export default Cards;