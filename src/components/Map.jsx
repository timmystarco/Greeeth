import React from "react";

const Map = () => {
  return (
    <div className="w-full w-100vw h-100vh p-5 overflow-scroll" >
      <iframe
        className="mx-auto w-full h-full rounded-3xl "
        src="https://my.gfw-mapbuilder.org/v1.latest/?appid=b6cd16603b95427ba7dddc5b30133de6"
      ></iframe>
    </div>
  );
};

export default Map;
