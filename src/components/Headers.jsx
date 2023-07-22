import React from "react";

const Headers = () => {
  return (
    <div className="flex justify-between py-8 border-b-2">
      <p className="text-white text-2xl font-bold">Miftahul</p>
      <ul className="flex gap-5 text-white text-xl">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Headers;
