import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

const Navbar = () => {
  const { showNav, setShowNav } = useContext(NavContext);

  return (
    <nav className="flex justify-between bg-navbar h-12 w-full items-center">
      <div className="flex ml-6 mt-4">
        <Link href="/">
          <Image className="cursor-pointer" src={Logo} width={40} height={40} />
        </Link>
        <h2 className="text-white ml-4 mt-2">Appointment</h2>
      </div>
      <div className="md:hidden text-white mr-6 mt-4">
        {showNav ? (
          <svg
            onClick={() => setShowNav(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setShowNav(true)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer mr-2"
            fillRule="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      <div className="hidden md:block">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
