import BannerRequiredFields from "./BannerRequiredFields";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import Link from "next/link";

const Banner = () => {
  const { showNav } = useContext(NavContext);
  return (
    <section className="">
      {showNav ? (
        <div className="bg-navbar w-full h-screen flex flex-col">
          <Link href="#">
            <span className="p-8 text-white text-sm font-semibold">
              Sign in
            </span>
          </Link>
          <hr className=" ml-8 mr-24 border-gray-700" />
          <Link href="#">
            <span className="p-8 text-white text-sm font-semibold">
              Sign up
            </span>
          </Link>
          <hr className=" ml-8 mr-24 border-gray-700" />
          <Link href="#">
            <span className="p-8 text-white text-sm font-semibold">
              Contact
            </span>
          </Link>
          <hr className=" ml-8 mr-24 border-gray-700" />
        </div>
      ) : (
        <div className="h-full pb-36 bg-navbar text-center">
          <div className=" pt-32">
            <h1 className="text-white text-center text-4xl font-bold ">
              Find a doctor now!
            </h1>
            <p className=" text-slate-100 font-semibold text-center px-12 mt-4 mb-4">
              181 000 doctor and expert is available
            </p>
          </div>
          <BannerRequiredFields />
        </div>
      )}
    </section>
  );
};

export default Banner;
