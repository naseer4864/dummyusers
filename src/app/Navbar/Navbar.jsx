"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileMenu from "../component/MobileMenu";
import { IoIosMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    router.push(path);
    setIsMenuOpen(false); 
  };

  return (
    <div className="w-full h-20 bg-customBg flex justify-between  items-center md:justify-around sticky top-0 z-50">
      <p className="text-white font-semibold p-3 cursor-pointer" onClick={() => handleNavigate("/")}>Logo</p>

      <div className={`hidden md:flex gap-10 text-white p-3`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/faqs">Faqs</Link>
      </div>

      <button
            className="hidden md:flex text-white font-bold p-3"
            onClick={() => handleNavigate("/login")}
          >
            Login
          </button>

      <div className="md:hidden flex items-center p-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {
          isMenuOpen ?  <FaXmark className="text-white text-xl" /> : <IoIosMenu className="text-white text-xl font-bold" /> 
        }
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} handleNavigate={handleNavigate} />  

    </div>
  );
}

