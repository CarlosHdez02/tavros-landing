"use client";
import Link from "next/link";
import React from "react";
import MobileMenu from "./HamburgerMenu";

export default function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <nav className="hidden sm:flex flex-wrap items-center gap-x-8">
        <Link
          className="cursor-pointer text-[#E8B44F] hover:text-[#c99a40] transition-colors font-medium text-lg"
          href="/#testimonials"
        >
          Testimonios
        </Link>
        <div className=" p-2 ">
          <Link
            className="cursor-pointer text-[#E8B44F] font-semibold"
            href="/#action-whatsapp"
          >
            Ser una persona de poder
          </Link>
        </div>
      </nav>

      <button
        className="md:hidden text-[#E8B44F] text-2xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "✕" : "☰"}
      </button>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
