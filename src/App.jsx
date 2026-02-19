import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    setUserData([]);

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index + 2}&limit=8`,
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className="text-[#F7F7F2] text-xl font-bold tracking-widest absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      Loading the Images ...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Cards elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-[#121113] font-sans flex flex-col overflow-hidden text-white h-screen">
      <header className="w-full pt-12 pb-4">
        <h1
          className="text-center text-3xl md:text-4xl font-extrabold tracking-widest
               bg-linear-to-r from-[#F7F7F2] via-[#899878] to-[#222725] 
               bg-clip-text text-transparent"
        >
          GALLERY OF IMAGES
        </h1>
      </header>

      <main className="relative grow p-4 max-w-7xl mx-auto w-full flex flex-col justify-center">
        <div className="flex flex-wrap justify-center gap-6 w-full animate-fade-in">
          {printUserData}
        </div>
      </main>

      <footer className="w-full pb-6 bg-[#121113]">
        <Buttons index={index} setIndex={setIndex} />
      </footer>
    </div>
  );
};

export default App;
