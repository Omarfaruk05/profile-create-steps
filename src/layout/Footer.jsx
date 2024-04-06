const Footer = () => {
  return (
    <div className="bg-gray-100 px-2">
      <div className="max-w-[1400px] mx-auto">
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 justify-between">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold my-4">Dribble</h2>
            <p>{`Dribble is the world's leading community for creatives to share, gorw, and get hired.`}</p>
            <div className="flex gap-2 my-3 font-bold">
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Icons
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Icons
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Icons
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Icons
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Icons
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold my-4">For designers</h5>

            <div className="space-y-2">
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Go Pro!
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Explore design work
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Design blog
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Overtime podcast
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Playoffs
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Weekly Warm-up
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Refer a Friend
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Code fo conduct
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold my-4">Hire designers</h5>

            <div className="space-y-2">
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Post a job opneing
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Post a freelance porject
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Search for designers
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Overtime podcast
              </p>
              <p className="font-semibold text-lg my-4">Brands</p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Advertise with us
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold my-4">Company</h5>

            <div className="space-y-2">
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                About
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Careers
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Support
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Media kit
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Testimonials
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                API
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Terms of service
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Privacy policy
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Cookie policy
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold my-4">Directories</h5>

            <div className="space-y-2">
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Design jobs
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Designers for fire
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Freelance designers for hire
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Tags
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Placys
              </p>
              <p className="font-semibold text-lg my-4">Design assets</p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Dribble Marketplace
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Creative Market
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Fontspring
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Font Squirrel
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold my-4">Design Resources</h5>

            <div className="space-y-2">
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Freelancing
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Design Hiring
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Design Protfolio
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Desing Education
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Creative Process
              </p>
              <p className="hover:underline hover:text-pink-600 cursor-pointer">
                Desing Industry Ternds
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-4 flex justify-between items-center text-gray-600">
          <p>2023 Dribble. All rights reserved.</p>
          <p>
            <span className="text-black font-bold">20,501,853</span>{" "}
            <span>shots dribbled </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
