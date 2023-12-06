import { FaSearch, FaBars } from "react-icons/fa";
import Image from "next/image";
import logo from "../../assets/image/logo.png";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center w-full gap-10">
        <Image
          src={logo}
          alt="Logotipo Alura Dev"
          className="w-[145px] ml-[-16px]"
        />
        <input
          type="search"
          className="hidden md:flex w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none"
          placeholder="Busque por algo"
        />
        <div className="hidden lg:flex justify-end items-center gap-2 w-fit">
          <img
            className="w-8 rounded-full"
            src="https://github.com/victorcabral182.png"
            alt="Foto do github"
          />
          <span className="text-white">Victor</span>
        </div>
        <div className="flex justify-center items-center gap-[32px] mt-1 mr-3 lg:hidden">
          <FaSearch className="text-[20px] text-white md:hidden" />
          <FaBars className="text-[22px] text-white" />
        </div>
      </header>
    </>
  );
};
