"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { curve } from "@/public/assets";
import MenuSvg from "@/public/assets/svg/MenuSvg";

import { navigation } from "../constants";

import { HamburgerMenu } from "./design/Header";
import { NavbarV2 } from "./design/NavV2";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <span className="relative inline-block pb-1 text-white">
          BrickAI{" "}
          <Image
            src={curve}
            className="absolute left-0 top-full w-full xl:-mt-2"
            width={624}
            height={28}
            alt="Curve"
          />
        </span>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed inset-x-0 bottom-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <div
                key={item.id}
                onClick={handleClick}
                className="relative block p-6 text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:hidden lg:text-xs lg:font-semibold lg:leading-5 lg:text-n-1 lg:hover:text-n-1 xl:px-12"
              >
                {item.title}
              </div>
            ))}
            <NavbarV2 />
          </div>

          <HamburgerMenu />
        </nav>

        <Button variant="galaxy" className="hidden lg:flex mr-8">
          Log in
        </Button>

        <Button
          variant="secondary"
          className="hidden transition-colors  lg:block"
        >
          Sign up for free
        </Button>

        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg isOpen={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
