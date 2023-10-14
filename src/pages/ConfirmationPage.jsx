import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  const data = useSelector((state) => state.student.student);
  const { name, age } = data;
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
            <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
              Studednt Management System
            </p>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Your name <span className="text-indigo-500">{name}</span> aged{" "}
              <span className="text-indigo-500"> {age} </span> has been added to
              student system. You may now exit.
            </p>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center py-3">
              <Link
                to="/"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Exit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
