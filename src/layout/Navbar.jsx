import { Link } from "react-router-dom";
import bagIcon from "../assets/bag.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({});
  const data = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setUser(data?.data);
  }, [data]);
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <div>
      <div className="max-w-[1400px] mx-auto p-4">
        <div className="flex gap-4 justify-between items-center">
          <h2 className="block lg:hidden text-3xl font-bold">Dribble</h2>
          <div className="hidden lg:block">
            <ul className="flex gap-7 font-semibold justify-between items-center">
              <li className="text-3xl font-bold">Dribble</li>
              <li className="text-gray-600 hover:text-pink-600 cursor-pointer">
                Inspiration
              </li>
              <li className="text-gray-600 hover:text-pink-600 cursor-pointer">
                Find Work
              </li>
              <li className="text-gray-600 hover:text-pink-600 cursor-pointer">
                Learn Design
              </li>
              <li className="text-gray-600 hover:text-pink-600 cursor-pointer">
                Go Pro
              </li>
              <li className="text-gray-600 hover:text-pink-600 cursor-pointer">
                Hire Designers
              </li>
            </ul>
          </div>
          <div className="flex gap-4 justify-between items-center">
            <input
              className="py-2 px-3 bg-gray-100 rounded-md focus:outline-pink-600"
              placeholder="Search"
              type="text"
              name="search"
              id=""
            />
            {user ? (
              <img
                className="p-1 h-12 w-12 rounded-full bg-pink-200"
                src={user?.imageUrl}
                alt=""
              />
            ) : (
              <div className="pt-1 h-11 w-11 rounded-full bg-pink-200"></div>
            )}
            <img className="h-8 w-8" src={bagIcon} alt="" />
            {user ? (
              <button
                onClick={handleLogOut}
                className="cursor-pointer transition-all active:scale-95 bg-pink-500 text-white font-semibold px-4 py-2 rounded-md"
              >
                Logout
              </button>
            ) : (
              <Link to={"/signup"}>
                <button
                  onClick={handleLogOut}
                  className="cursor-pointer transition-all active:scale-95 bg-green-700 text-white font-semibold px-4 py-2 rounded-md"
                >
                  Signup
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
