import React from "react";

const Headers = () => {
  return (
    <div className="flex justify-between py-8 border-b-2">
      <h1 className="text-white">Miftahul</h1>
      <ul className="flex gap-5 text-white text-xl font-medium">
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
