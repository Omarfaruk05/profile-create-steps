/* eslint-disable no-undef */
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
  const [processImage, setProcessImage] = useState(false);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(
    "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const fileInputRef = useRef(null);

  const handleImage = (event) => {
    setProcessImage(true);
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      const imgBBURL =
        "https://api.imgbb.com/1/upload?key=d93b2967fa5ed86d686b286dab147db4";

      fetch(imgBBURL, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to upload image");
          }
          return res.json();
        })
        .then((data) => {
          setProcessImage(false);
          setImageUrl(data?.data?.url);
        })
        .catch((error) => console.error("Error uploading image:", error));
    }
  };

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (data) => {
    const info = {
      imageUrl,
      address: data?.address,
    };

    const token = localStorage.getItem("token");

    const res = await fetch(
      `https://create-user-backend.vercel.app/api/v1/users/update`,
      {
        method: "PATCH",
        headers: {
          authorization: token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );

    const updatedUser = await res.json();
    console.log(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    reset();
    navigate("/category");
  };

  return (
    <div>
      <p className="text-[#88671a] text-xl font-serif font-semibold m-12">
        Dribble
      </p>
      <div className="max-w-3xl mx-auto my-6 px-4 space-y-8">
        <div>
          <h1 className="text-4xl font-bold">{`Welcome! Let's create your profile`}</h1>
          <p className="my-3 font-semibold">
            Let others get to know you better! You can do this later
          </p>
        </div>
        <div className="space-y-12">
          <div>
            <h4 className="text-xl font-bold my-8">Add an avatar</h4>
            <div className="flex gap-12 justify-start items-center">
              {processImage ? (
                <div className="h-44 w-44 flex items-center justify-center bg-gray-200 rounded-full">
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
                </div>
              ) : (
                <div className=" bg-gray-200 rounded-full">
                  <img
                    className="h-44 w-44 rounded-full"
                    src={imageUrl}
                    alt=""
                  />
                </div>
              )}
              <div>
                <button
                  className="px-4 bg-gray-50 py-1 rounded-md border-[1px] hover:bg-pink-500 hover:text-white font-semibold"
                  onClick={handleChooseImage}
                >
                  Choose image
                </button>
                <input
                  type="file"
                  {...register("file")}
                  className="hidden"
                  onChange={handleImage}
                  ref={fileInputRef}
                />
                <p className="my-2 text-gray-400 font-semibold">{`> Or choose one of our defaults`}</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h4 className="text-xl font-bold">Add your location</h4>
              <input
                className="text-xl font-semibold border-b w-full focus:outline-none my-2 p-1 focus:border-b-2"
                type="text"
                {...register("address", {
                  required: "Address is required",
                })}
                aria-invalid={errors.address ? "true" : "false"}
              />{" "}
              {errors.address && (
                <small className="text-pink-700" role="alert">
                  {errors.address.message}
                </small>
              )}
            </div>
            <div className="my-7">
              <input
                className="cursor-pointer transition-all active:scale-95 bg-pink-500 text-white font-semibold px-16 py-1 rounded-md"
                type="submit"
                value="Next"
              />
              <p className="text-xs mt-1 text-gray-500 font-semibold ml-4">
                or Presss RETURN
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
