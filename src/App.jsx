import React, { use, useEffect, useState } from "react";
import axios from "axios";

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
          <a href={elem.url} target="_blank">
            <div className="h-60 w-60 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto p-4 text-white h-screen">
      <div className="flex flex-wrap gap-4 p-2 h-[82%]">{printUserData}</div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold "
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
            
          }}
        >
          Previous
        </button>
        <button
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold 
          "
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
