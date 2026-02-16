import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
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
    <h3 className="text-white text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      LOADING ...
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
    <div className="bg-black overflow-auto p-4 text-white h-screen">
      <div className="flex flex-wrap gap-4 p-2 h-[82%]">{printUserData}</div>
      <Buttons index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  );
};

export default App;
