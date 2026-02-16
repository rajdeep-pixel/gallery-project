import React, { use, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);


  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=4&limit=30")
    
      setUserData(response.data)
    
  }
  let printUserData = "No user avaliable"

  if (printUserData.length > 0) {
    printUserData = userData.map(function (elem,idx) {

      return <div key={idx}>
        <a href={elem.url} target="_blank">
          <div className="h-60 w-60 overflow-hidden bg-white rounded-xl">
        <img className="h-full w-full object-cover" src={elem.download_url} alt="" />
      </div>
      <h2 className="font-bold text-lg">{elem.author}</h2>
        </a>
      </div>
    });
  }
  return (
      <div className="bg-black overflow-auto text-white h-screen">
        <button
          onClick={getData}
          className="bg-green-600 active:scale-95 text-white m-3 px-5 py-2 rounded"
        >
          Get Data
        </button>
        <div className="flex flex-wrap gap-4 text-white">{printUserData}</div> 
      </div>
  );
};

export default App;
