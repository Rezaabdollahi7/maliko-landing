"use client";
import Logo from "@/public/icons/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/features", label: "امکانات" },
  { href: "/about", label: "درباره ما" },
  { href: "/problems", label: "مشکلات" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="container mx-auto mt-4 px-4 sm:px-6">
      {/* Desktop Navbar */}
      <div className="hidden md:flex space-x-16 py-4 max-w-7xl rounded-2xl px-6 bg-white items-center mx-auto justify-between text-primary font-semibold border-2 border-primary/20">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            alt="لوگوی اپلیکیشن مالیکو"
            src={Logo}
            width={40}
            height={40}
            priority
            className="rounded-lg"
          />
        </Link>
        <div className="links flex gap-4 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 lg:px-4 py-1 hover:bg-primary/10 rounded-lg transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="img-wrapper py-2 bg-primary rounded-full flex items-center gap-3 px-4 text-white font-bold shadow-xs shadow-primary border-2 border-white hover:bg-primary/90 transition cursor-pointer">
          <p className="">دانلود </p>
          <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between py-2 px-4 bg-white rounded-2xl border-2 border-primary/20">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            alt="لوگوی اپلیکیشن مالیکو"
            src={Logo}
            width={40}
            height={40}
            priority
            className="rounded-lg"
          />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md text-primary focus:outline-none"
          aria-label={isMenuOpen ? "بستن منوی موبایل" : "باز کردن منوی موبایل"}
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl border-2 border-primary/20 p-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg hover:bg-primary/10 transition"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <div className="img-wrapper mt-2 py-3 bg-primary rounded-full flex items-center gap-3 px-3 text-white font-bold shadow-xs shadow-primary border-2 border-white hover:bg-primary/90 transition cursor-pointer justify-center">
              <p className="mr-3">دانلود </p>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
