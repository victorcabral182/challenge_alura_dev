"use client";

import Image from "next/image";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaSearch, FaBars } from "react-icons/fa";
import { MenuMobile } from "../MenuMobile";
import logo from "../../assets/image/logo.png";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <header className="flex justify-between items-center lg:grid lg:grid-cols-4 w-full gap-10">
        <Image
          src={logo}
          alt="Logotipo Alura Dev"
          className="w-[145px] ml-[-16px] lg:col-span-1"
        />
        <input
          type="search"
          className="hidden md:flex w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
          placeholder="Busque por algo"
        />
        <div className="hidden lg:flex justify-end items-center gap-2 w-fit lg:w-full lg:col-span-1">
          <img
            className="w-8 rounded-full"
            src="https://github.com/victorcabral182.png"
            alt="Foto do github"
          />
          <span className="text-white">Victor</span>
        </div>
        <div className="flex justify-center items-center gap-[32px] mt-1 mr-3 lg:hidden">
          <FaSearch className="text-[20px] text-white md:hidden" />
          {isOpenMenu ? (
            <FaBars
              className="text-[22px] text-white"
              onClick={handleOpenMenu}
            />
          ) : (
            <CgClose
              className="text-[22px] text-white"
              onClick={handleOpenMenu}
            />
          )}
        </div>
      </header>
      <MenuMobile className={isOpenMenu ? "left-[-100vw]" : "left-0"} />
    </>
  );
};
