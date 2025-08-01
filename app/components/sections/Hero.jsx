"use client";
import cup from "@/public/images/Mockup.png";
import Image from "next/image";
import CustomBazarIcon from "../SvgIcons/CustomBazarIcon";
import CustomDownloadIcon from "../SvgIcons/CustomDownloadIcon";
import CustomMyketIcon from "../SvgIcons/CustomMyketIcon";

// Array of download links for better maintainability
const downloadLinks = [
  {
    href: "https://cafebazaar.ir/app/com.maliko.app",
    label: "نصب از کافه بازار",
    icon: <CustomBazarIcon />,
  },
  {
    href: "https://myket.ir/app/com.maliko.app",
    label: "نصب از مایکت",
    icon: <CustomMyketIcon />,
  },
  {
    href: "https://maliko.app/download/maliko.apk",
    label: "دانلود مستقیم اپ",
    icon: <CustomDownloadIcon />,
  },
];

export default function Hero() {
  return (
    <section className="hero grid grid-cols-1 lg:grid-cols-5 max-w-7xl mx-auto my-32 px-12 lg:px-32 pt-28 pb-32 bg-primary text-white rounded-2xl gap-12 relative">
      <div className="col-span-1 lg:col-span-3 flex flex-col justify-center gap-y-12 order-2">
        <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold ">
          آسودگی مالی با شفافیت بی‌سابقه.
        </h3>
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold ">
          مالیکو : مدیریت مالی جامع و صمیمی.
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify ">
          خداحافظی با سردرگمی‌های مالی! با مالی‌کو، دیگه هیچ پولی بی‌حساب‌وکتاب
          نمی‌مونه. تراکنش‌هات رو از پیامک‌های بانکی خودکار ثبت کن، دسته‌بندی
          کن، آمار ببین و راحت‌تر پس‌انداز کن. دوست مالی شخصی شما، همیشه در
          جیبتان!
        </p>
        <div className="links-wrapper flex gap-4 flex-wrap">
          {downloadLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-base bg-black text-white rounded-xl py-3 w-content px-4 flex gap-3 items-center"
            >
              {link.label}
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 flex justify-center items-center relative order-1 lg:order-2 ">
        <Image
          src={cup}
          width={320}
          height={480}
          className="lg:h-[30rem] w-[20rem] rotate-[-5deg] "
          alt="تصویر ماکاپ گوشی حاوی اپلیکیشن مالی‌کو و نمایش امکانات آن"
        />
      </div>
      <div className="py-4 px-4 bg-gray-100 rounded-tl-4xl flex flex-col justify-center items-center absolute bottom-0">
        <div className="absolute size-6 bg-gray-100 -top-6 right-0  ">
          <div className="bg-primary size-6 rounded-br-4xl"></div>
        </div>
        <p className="text-text text-xl font-semibold ">ثبت خودکار </p>
        <p className="text-text text-xl font-bold"> تراکنش‌های بانکی </p>
        <div className="absolute size-6 bg-gray-100 -left-6 bottom-0  ">
          <div className="bg-primary size-6 rounded-br-4xl"></div>
        </div>
      </div>
      <div className="py-4 px-4 bg-gray-100 rounded-br-4xl flex flex-col justify-center items-center absolute top-0 left-0">
        <div className="absolute size-6 bg-gray-100 -right-6 top-0 rotate-180">
          <div className="bg-primary size-6 rounded-br-4xl"></div>
        </div>
        <p className="text-text text-xl font-semibold ">هر تراکنش،</p>
        <p className="text-text text-xl font-bold">یک قدم به سمت رشد</p>
        <div className="absolute size-6 bg-gray-100 -bottom-6 left-0 rotate-180  ">
          <div className="bg-primary size-6 rounded-br-4xl"></div>
        </div>
      </div>
    </section>
  );
}
