import React from "react";

export default function Screen({result,text}) {
  return (
    <div className="bg-white w-60  h-16 my-2 p-2 flex rounded-lg flex-col  items-end w-auto  ">
      <div >
        <div className="flex-1 text-3xl">
          <h3>{result} </h3>
        </div>
        <div className="flex-1 text-sm">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
}
