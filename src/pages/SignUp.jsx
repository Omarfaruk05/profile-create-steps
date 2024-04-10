/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import signupBG from "../assets/signupbg.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    delete data?.check;
    const stirngifyData = JSON.stringify(data);

    console.log(stirngifyData);
    const res = await fetch(
      `https://create-user-backend.vercel.app/api/v1/users/signup`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: stirngifyData,
      }
    );

    const user = await res.json();
    console.log(user);
    if (user?.status) {
      setUser(user?.data?.user);
      localStorage.setItem("token", user?.data?.token);
      reset();
      navigate("/image-upload");
    } else {
      setError(user?.error);
    }
  };

  console.log(user);
  return (
    <div className="flex flex-wrap md:h-screen">
      <div className="hidden md:block md:w-2/5  lg:w-2/6 bg-[#f2d184] ">
        <p className="text-[#88671a] text-xl font-serif font-semibold m-12">
          Dribble
        </p>
        <div className="grid grid-cols-1 p-12 gap-16 lg:gap-4">
          <h1 className="text-4xl font-bold text-yellow-900">
            Dsicover the Worlds top Designers & Creatives
          </h1>

          <img src={signupBG} alt="" />
          <p>
            Art by{" "}
            <a className="hover:underline text-blue-700" href="#">
              Peter Tarka
            </a>
          </p>
        </div>
      </div>
      <div className="md:w-3/5 lg:w-4/6 p-4 flex justify-center items-center relative">
        <div>
          <small className="absolute top-3 right-3 md:top-10 md:right-10">
            Already a member?{" "}
            <span className="text-indigo-800 hover:underline">
              <a href="#">Sing In</a>
            </span>
          </small>
          <h1 className="text-3xl font-bold my-4">Sign up to Dribble</h1>
          {error && (
            <ul className="list-disc ml-8 text-sm text-pink-600">
              <li>{error}</li>
            </ul>
          )}
          <div className="max-w-[500px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-3 flex-wrap my-7">
                <div>
                  <p className="font-semibold ml-1">Name</p>
                  <input
                    className="bg-gray-100 p-2 rounded-md focus:outline-gray-200 w-full"
                    placeholder="Your Full Name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />{" "}
                  {errors.name && (
                    <small className="text-pink-700" role="alert">
                      {errors.name.message}
                    </small>
                  )}
                </div>
                <div>
                  <p className="font-semibold ml-1">Username</p>
                  <input
                    className="bg-gray-100 p-2 rounded-md focus:outline-gray-200 w-full"
                    placeholder="Your User Name"
                    type="text"
                    {...register("userName", {
                      required: "User name is required",
                    })}
                    aria-invalid={errors.userName ? "true" : "false"}
                  />{" "}
                  {errors.userName && (
                    <small className="text-pink-700" role="alert">
                      {errors.userName.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="my-7">
                <p className="font-semibold ml-1">Email</p>
                <input
                  className="bg-gray-100 p-2 rounded-md focus:outline-gray-200 w-full"
                  placeholder="Your Email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <small className="text-pink-700" role="alert">
                    {errors.email.message}
                  </small>
                )}
              </div>
              <div className="my-7">
                <p className="font-semibold ml-1">Password</p>
                <input
                  className="bg-gray-100 p-2 rounded-md focus:outline-gray-200 w-full"
                  placeholder="6+ characters"
                  type="password"
                  {...register("password", {
                    required: "Password is required.",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <small className="text-pink-700" role="alert">
                    {errors.password.message}
                  </small>
                )}
              </div>
              <div>
                <div className="flex gap-2 items-start">
                  <input
                    className="mt-2 outline-gray-300"
                    type="checkbox"
                    {...register("check", {
                      required: " Agree with all terms and condtions",
                    })}
                    aria-invalid={errors.check ? "true" : "false"}
                  />
                  <p className="text-sm text-gray-500 font-semibold">
                    <span>{`Creating an account means you're okey with our`}</span>{" "}
                    <span className="hover:underline text-indigo-800">
                      <a href="#">Terms of Service.</a>
                    </span>{" "}
                    <span className="hover:underline text-indigo-800">
                      <a href="#">Privacy Policy.</a>
                    </span>{" "}
                    <span>and our default</span>{" "}
                    <span className="hover:underline text-indigo-800">
                      <a href="#">Notification Settings.</a>
                    </span>
                  </p>
                </div>{" "}
                {errors.check && (
                  <small className="text-pink-700" role="alert">
                    {errors.check.message}
                  </small>
                )}
              </div>
              <div className="my-7">
                <input
                  className="cursor-pointer transition-all active:scale-95 bg-pink-500 text-white font-semibold px-6 py-1 rounded-md"
                  type="submit"
                  value="Create Account"
                />
              </div>
            </form>
            <p className="text-sm text-gray-500">
              <span>This site is protected by reCAPTCHA and the Google</span>{" "}
              <span className="hover:underline text-indigo-800">
                <a href="#">Privacy Policy.</a>
              </span>{" "}
              <span>and</span>{" "}
              <span className="hover:underline text-indigo-800">
                <a href="#">Terms of Service</a>
              </span>{" "}
              <span>appply.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
