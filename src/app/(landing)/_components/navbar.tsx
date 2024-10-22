"use client";
import Link from "next/link";
import { NavLinks } from "@/shared/constants/nav_link";
import { Icon } from "@iconify/react";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import MobileNavbar from "./mobile_navbar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className=" hidden md:block sticky top-0 bg-white/80 backdrop-blur-md saturate-200 p-6 border-b">
        <nav className=" flex items-center gap-12">
          <div className=" font-bold">.logo</div>
          <ul className=" flex gap-4 font-semibold">
            {NavLinks.map((link) => {
              return (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
          <div className=" ml-auto flex gap-3 items-center">
            <Button className=" px-6 py-2 bg-black hover:opacity-80 text-white">
              Get started
            </Button>
            <Icon
              icon={"solar:user-circle-bold"}
              className=" h-8 w-8 text-stone-800 "
            />
            <Icon
              icon={"solar:map-point-bold"}
              className=" h-8 w-8 text-stone-800 "
            />
          </div>
        </nav>
      </header>
      <div className="  block border-b md:hidden sticky top-0 bg-white">
        <div className=" p-4 flex justify-between ">
          <section>.logo</section>
          <button
            onClick={() => setMenuOpen(true)}
            className=" w-fit bg-stone-200 p-2 rounded-full hover:opacity-80"
          >
            <Icon
              icon="solar:hamburger-menu-line-duotone"
              className=" text-black"
            />
          </button>
        </div>
        {menuOpen && (
          <MobileNavbar isMenuOpen={menuOpen} closeMenuHandler={closeMenu} />
        )}
      </div>
    </>
  );
}
