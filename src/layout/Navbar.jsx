import bagIcon from "../assets/bag.svg";
import profileIcon from "../assets/profile.png";

const Navbar = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto p-4">
        <div className="flex gap-4 justify-between items-center">
          <div>
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
            <img
              className="pt-1 h-11 w-11 rounded-full bg-pink-200"
              src={profileIcon}
              alt=""
            />
            <img className="h-8 w-8" src={bagIcon} alt="" />
            <button className="cursor-pointer transition-all active:scale-95 bg-pink-500 text-white font-semibold px-4 py-2 rounded-md">
              Upload
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
