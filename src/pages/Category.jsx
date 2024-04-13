/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import desinger from "../assets/desinger.jpg";
import recruiter from "../assets/recruiter.jpg";
import student from "../assets/student.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const handleCategory = async (data) => {
    setLoading(true);
    const { designer, recruiter, student } = data;

    // make an array  for role
    const initialCategories = [designer, recruiter, student];

    // take only truthy value from array
    const finalCategory = initialCategories.filter((category) => {
      if (category) {
        return category;
      }
    });
    console.log(finalCategory);

    const sendingData = { role: finalCategory };
    const token = localStorage.getItem("token");

    const res = await fetch(
      `https://create-user-backend.vercel.app/api/v1/users/update`,
      {
        method: "PATCH",
        headers: {
          authorization: token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(sendingData),
      }
    );
    const updatedUser = await res.json();
    localStorage.setItem("user", JSON.stringify(updatedUser));
    reset();
    navigate("/");
    setLoading(false);
  };

  return (
    <div>
      <div className="flex gap-2 justify-start items-center">
        <p className="text-[#88671a] text-xl font-serif font-semibold m-12">
          Dribble
        </p>
        <button
          className="bg-gray-100 px-3 py-1 rounded-md focus:scale-95"
          type="submit"
        >{`<`}</button>
      </div>
      <div className="max-w-7xl mx-auto my-6 px-4 space-y-8 flex flex-col gap-12 justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold">What brings you to Bribble?</h1>
          <p className="my-3 font-semibold text-gray-600">
            {`Select the options that best describe you. Don't worry, you can explore other options later.`}
          </p>
        </div>
        {/* carts  */}
        <form onSubmit={handleSubmit(handleCategory)}>
          <div className="flex flex-wrap gap-12 justify-around items-center">
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="checkbox"
                  {...register("designer")}
                  className="peer sr-only"
                  value={"designer"}
                />
                <span className="absolute bottom-2 -ml-4 text-center z-10 opacity-0 transition-all peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-pink-500 stroke-white"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </span>{" "}
                <span className="absolute bottom-[15px] -ml-2 text-center z-10 peer-checked:opacity-0 transition-all opacity-100">
                  <p className="w-5 h-5 border-2 rounded-full"></p>
                </span>
                <div className="pb-12 w-72 overflow-hidden rounded-lg bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-pink-500 peer-checked:grayscale-0">
                  <div>
                    <img
                      src={desinger}
                      alt="Sofa 1"
                      className=" object-cover"
                    />
                  </div>
                  <header className="px-2.5 py-2.5">
                    <p className="text-lg font-bold tracking-wide text-gray-700">
                      {`I'm a designer looking to share my work`}
                    </p>
                  </header>
                </div>
              </label>
            </div>
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="checkbox"
                  {...register("recruiter")}
                  value={"recruiter"}
                  className="peer sr-only"
                />
                <span className="absolute bottom-2 -ml-4 text-center z-10 opacity-0 transition-all peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-pink-500 stroke-white"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </span>
                <span className="absolute bottom-[15px] -ml-2 text-center z-10 peer-checked:opacity-0 transition-all opacity-100">
                  <p className="w-5 h-5 border-2 rounded-full"></p>
                </span>
                <div className="pb-12 w-72 overflow-hidden rounded-lg bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-pink-500 peer-checked:grayscale-0">
                  <div>
                    <img
                      src={recruiter}
                      alt="Sofa 1"
                      className="object-cover"
                    />
                  </div>
                  <header className="px-2.5 py-2.5">
                    <p className="px-3 text-lg font-bold tracking-wide text-gray-700">
                      {`I'm looking to hire a designer`}
                    </p>
                  </header>
                </div>
              </label>
            </div>
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="checkbox"
                  {...register("student")}
                  value={"student"}
                  className="peer sr-only"
                />
                <span className="absolute bottom-2 -ml-4 text-center z-10 opacity-0 transition-all peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-pink-500 stroke-white"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </span>{" "}
                <span className="absolute bottom-[15px] -ml-2 text-center z-10 peer-checked:opacity-0 transition-all opacity-100">
                  <p className="w-5 h-5 border-2 rounded-full"></p>
                </span>
                <div className="pb-12 w-72 overflow-hidden rounded-lg bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-pink-500 peer-checked:grayscale-0">
                  <div>
                    <img src={student} alt="Sofa 1" className="object-cover" />
                  </div>
                  <header className="px-2.5 py-2.5">
                    <p className="text-lg font-bold tracking-wide text-gray-700">
                      {`I'm looking for desing inspiration`}
                    </p>
                  </header>
                </div>
              </label>
            </div>
          </div>
          <div className="">
            <p className="my-4 font-semibold">
              Anything else? You can select multiple
            </p>
            {loading ? (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
                disabled=""
              >
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </button>
            ) : (
              <button
                type="submit"
                className="transition-all active:scale-95 w-fit mx-auto px-16 py-1 rounded-md bg-pink-500 text-white"
              >
                Finish
              </button>
            )}

            <p className="text-xs mt-1 text-gray-500 font-semibold ml-4">
              or Presss RETURN
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Category;
