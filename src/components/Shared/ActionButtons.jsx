import React from "react";

const ActionButtonOuline = ({ children }) => {
  return (
    <button className="px-6 py-4 font-semibold tracking-widest uppercase transition-all duration-300 ease-in-out border text-black-10 border-black-10 hover:bg-black hover:text-white">
      {children}
    </button>
  );
};

const ActionButtonSolid = ({ children }) => {
  return (
    <button className="px-6 py-4 tracking-widest text-white uppercase transition-all duration-300 ease-in-out bg-black-10 hover:bg-grayHover">
      {children}
    </button>
  );
};

export { ActionButtonOuline, ActionButtonSolid };
