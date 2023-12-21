"use client";

import Image from "next/image";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaSearch, FaBars } from "react-icons/fa";
import { MenuMobile } from "../MenuMobile";
import logo from "../../assets/image/logo.png";
import { InputText } from "../InputText";

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
        <InputText
          placeholder="Busque por algo"
          classNameParentDiv="hidden md:flex w-full lg:col-span-2"
        />
        <div className="hidden lg:flex justify-end items-center hover:bg gap-2 w-fit lg:w-full lg:col-span-1">
          <img
            className="w-10 rounded-full"
            src="https://github.com/victorcabral182.png"
            alt="Foto do github"
          />
          <span className="text-white">Victor</span>
        </div>
        <div className="flex justify-center items-center gap-[32px] mt-1 mr-3 lg:hidden">
          <FaSearch className="text-[20px] text-white md:hidden" />
          {!isOpenMenu ? (
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
      <MenuMobile
        className={!isOpenMenu ? "right-[-100%]" : "right-0"}
        closeMenu={() => setIsOpenMenu(false)}
      />
    </>
  );
};
