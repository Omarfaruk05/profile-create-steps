import { useForm } from "react-hook-form";

const ImageUpload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <div>
              <h4 className="text-xl font-bold my-8">Add an avatar</h4>
              <div className="flex gap-12 justify-start items-center">
                <div className="w-44 h-44 bg-gray-600 rounded-full"></div>
                <div>
                  <label
                    className="px-4 bg-gray-50 py-1 rounded-md border-[1px] hover:bg-pink-500 hover:text-white font-semibold"
                    htmlFor="fileUpload"
                  >
                    <input
                      type="file"
                      {...register("image")}
                      className="hidden"
                      id="fileUpload"
                    />
                    Choose image
                  </label>
                  <p className="my-2 text-gray-400 font-semibold">{`> Or choose one of our defaults`}</p>
                </div>
              </div>
            </div>
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
