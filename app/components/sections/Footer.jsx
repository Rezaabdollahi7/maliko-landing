"use client";

import React from "react";
import { Download, ChevronLeft, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/icons/logo2.png";
import enemadLogo from "@/public/images/Enamad-logo.png";
import CustomBazarIcon from "../SvgIcons/CustomBazarIcon";
import CustomDownloadIcon from "../SvgIcons/CustomDownloadIcon";
import CustomMyketIcon from "../SvgIcons/CustomMyketIcon";
import CustomXIcon from "../SvgIcons/CustomXIcon";
import CustomTelegramIcon from "../SvgIcons/CustomTelegramIcon";
import CustomInstagramIcon from "../SvgIcons/CustomInstagramIcon";

// ----------------------
const Footer = () => {
  const footerSections = [
    {
      title: "درباره مالیکو",
      items: ["درباره ما", "ارتباط با ما", "شغل و دفاتر", "همکاری با کاربران"],
    },
    {
      title: "آموزش و پشتیبانی",
      items: [
        "آموزش مدیریت مالی شخصی",
        "راهنمای جامع صندوق‌های سرمایه‌گذاری",
        "خرید طلا از طریق بازار سرمایه",
        "تحلیل بنیادی کاربردی در بازار سرمایه",
      ],
    },
    {
      title: "دسترسی سریع",
      items: ["اخبار و اطلاعیه", "پادکست", "گزارش‌ها", "خدمات کاربران"],
    },
    {
      title: "مطالب مهم",
      items: [
        "کارزار کارت چیست؟",
        "بهترین سرمایه‌گذاری با پول کم در 1403",
        "نحوه محاسبه قیمت طلا + محاسبه‌گر آنلاین طلا",
        "بیمه تکمیلی چیست؟",
      ],
    },
  ];

  const appDownloadLinks = [
    {
      name: "دریافت از بازار",
      icon: <Download className="w-6 h-6" />,
      badge: <CustomBazarIcon />,
    },
    {
      name: "دریافت از مایکت",
      icon: <Download className="w-6 h-6" />,
      badge: <CustomMyketIcon />,
    },
    {
      name: "دریافت مستقیم اندروید",
      icon: <CustomDownloadIcon />,
      badge: <CustomDownloadIcon />,
    },
  ];

  const socialMediaLinks = [
    {
      name: "Twitter",
      icon: <CustomXIcon />,
    },
    {
      name: "Telegram",
      icon: <CustomTelegramIcon />,
    },
    {
      name: "Instagram",
      icon: <CustomInstagramIcon />,
    },
  ];

  return (
    <footer className="bg-[#FBFAFF] text-gray-700">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 text-right">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-right block  leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media and App Download Section */}
        <div className="mt-12 pt-8  grid  grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" col-span-1 text-center bg-[#F1EEFB] rounded-lg p-4 flex-1 flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              مالیکو در شبکه‌های اجتماعی
            </h3>
            <div className="flex justify-center space-x-6">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-3 bg-white rounded-xl border flex items-center justify-center border-gray-200   hover:shadow-md transition-all duration-200 size-12`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className=" col-span-3 bg-[#F1EEFB] rounded-lg px-6 py-4">
            <div className="text-start mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                دانلود اپلیکیشن مالیکو
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
              {appDownloadLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3  hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <span className=" font-medium text-gray-700 group-hover:text-blue-600">
                    {link.name}
                  </span>
                  <span className="">{link.badge}</span>
                  <ChevronLeft className="size-5 text-gray-400 group-hover:text-blue-500 ms-auto" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className=" ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Logo and Company Name */}
            <div className="flex  items-center gap-4">
              <div className="w-12 h-12 ">
                <Image
                  className="rounded-lg"
                  src={Logo}
                  alt="لوگوی مالیکو"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">مالیکو</h4>
                <p className="text-sm text-gray-500">مدیریت مالی هوشمند</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start gap-6 text-md text-gray-600">
              <div className="flex items-end  gap-2">
                <Phone className="w-5 h-5" />
                <span>021-12345678</span>
              </div>
              <div className="flex items-end  gap-2">
                <Mail className="w-5 h-5" />
                <span>info@maliko.ir</span>
              </div>
              <div className="flex items-end  gap-2">
                <MapPin className="w-5 h-5" />
                <span>تهران، ایران</span>
              </div>
            </div>
          </div>

          {/* Company Description and Enamad Logo */}
          <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col gap-4 lg:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-500 leading-relaxed  max-w-4xl">
              در حال حاضر متشکل از یازده شرکت تخصصی و بیش از 300 پرسنل فعال است
              که زنجیرهٔ خدمات مالیکو را برای مشتریان عزیز ایجاد کرده‌اند. تهران
              - خیابان شهید بهشتی، بین تجریش و ولیعصر، شماره 880، ساختمان نگین
              آزادی - طبقه 3
            </p>
            <Image
              src={enemadLogo}
              alt="لوگوی نماد اعتماد الکترونیکی (اینماد)"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-md">
            کلیه حقوق مادی و معنوی این وبسایت متعلق به تیم{" "}
            <span className="font-bold">مالیکو</span> می‌باشد
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
