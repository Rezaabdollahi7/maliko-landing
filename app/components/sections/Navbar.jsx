"use client";
import Logo from "../../../public/icons/logo2.png";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto mt-4 px-4 sm:px-6">
      {/* Desktop Navbar */}
      <section className="hidden md:flex space-x-16 py-2 max-w-7xl rounded-2xl px-6 bg-white items-center mx-auto justify-between text-primary font-semibold border-2 border-primary/20">
        <Image alt="maliko-logo" src={Logo} className="size-10 rounded-lg" />
        <div className="links flex gap-4 lg:gap-12">
          <a
            href="#"
            className="px-2 lg:px-4 py-1 hover:bg-primary/10 rounded-lg transition"
          >
            خانه
          </a>
          <a
            href="#"
            className="px-2 lg:px-4 py-1 hover:bg-primary/10 rounded-lg transition"
          >
            معرفی
          </a>
          <a
            href="#"
            className="px-2 lg:px-4 py-1 hover:bg-primary/10 rounded-lg transition"
          >
            امکانات
          </a>
          <a
            href="#"
            className="px-2 lg:px-4 py-1 hover:bg-primary/10 rounded-lg transition"
          >
            مشکلات
          </a>
          <a
            href="#"
            className="px-2 lg:px-4 py-1 hover:bg-primary/10 rounded-lg transition"
          >
            فوتر
          </a>
        </div>
        <div className="img-wrapper p-1 bg-primary rounded-full flex items-center gap-3 px-3 text-white font-bold shadow-xs shadow-primary border-2 border-white hover:bg-primary/90 transition cursor-pointer">
          <p className="mr-3">دانلود </p>
          <Image
            alt="maliko-logo"
            src={Logo}
            className="size-10 rounded-full"
          />
        </div>
      </section>

      {/* Mobile Navbar */}
      <section className="md:hidden flex items-center justify-between py-2 px-4 bg-white rounded-2xl border-2 border-primary/20">
        <Image alt="maliko-logo" src={Logo} className="size-10 rounded-lg" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md text-primary focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl border-2 border-primary/20 p-4">
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-primary/10 transition"
            >
              خانه
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-primary/10 transition"
            >
              معرفی
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-primary/10 transition"
            >
              امکانات
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-primary/10 transition"
            >
              مشکلات
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-primary/10 transition"
            >
              فوتر
            </a>
            <div className="img-wrapper mt-2 p-1 bg-primary rounded-full flex items-center gap-3 px-3 text-white font-bold shadow-xs shadow-primary border-2 border-white hover:bg-primary/90 transition cursor-pointer justify-center">
              <p className="mr-3">دانلود </p>
              <Image
                alt="maliko-logo"
                src={Logo}
                className="size-10 rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
