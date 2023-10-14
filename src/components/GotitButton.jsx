import React from "react";

const GotitButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className="inline-block rounded-lg bg-blue-900 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-500 focus-visible:ring active:bg-blue-600 md:text-base"
        onClick={props.actions.handleGotItButton}
      >
        Got It
      </button>
    </div>
  );
};

export default GotitButton;
