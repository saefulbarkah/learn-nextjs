import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from ".//../public/assets/Logo/logo.jpg";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import NavBar from "./NavBar";
import NavMobile from "./NavMobile";
export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const toggle = () => {
    setMobileNav(mobileNav === false ? true : false);
  };

  useEffect(() => {
    window.onscroll = () => {
      setNavColor(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);
  return (
    <>
      {/* navbar Desktop */}
      <nav
        className={`sticky hidden md:block z-9999 top-0 w-full border border-b-border-color transition-all duration-300 backdrop-opacity-0 ${
          navColor
            ? "bg-gray/50 backdrop-filter backdrop-blur-sm backdrop-opacity-100"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between  mx-auto w-full">
          {/* Logo */}
          <div className="logo text-white">
            <Image src={logo} width="45" height="45" />
          </div>

          {/* nav desktop */}
          <NavBar />
        </div>
      </nav>

      {/* navbar mobile */}
      <nav
        className={`w-full fixed top-0 border border-b-border-color md:hidden py-5 px-5 transition-all duration-300 ${
          navColor
            ? "bg-gray/50 backdrop-filter backdrop-blur-sm backdrop-opacity-100"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between  mx-auto w-full">
          {/* Logo */}
          <div className="logo text-white">
            <Image src={logo} width="45" height="45" />
          </div>

          {/* HamburgerButton */}
          <div className="text-white ml-auto lg:hidden">
            <div
              className="rounded-lg bg-success p-4 text-lg leading-4 bg-opacity-20 cursor-pointer"
              onClick={toggle}
            >
              {mobileNav ? (
                <IoClose className="text-primary transition duration-100" />
              ) : (
                <HiMenu className="text-primary transition duration-100" />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* nav mobile */}
      {mobileNav == false ? (
        <NavMobile addClassName="to_bottom" />
      ) : (
        <NavMobile addClassName="translate-y-0 mobile" />
      )}
    </>
  );
}
