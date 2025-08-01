import React from "react";
import Image from "next/image";
import appMockup from "@/public/images/Card.png";
import CustomBazarIcon from "../SvgIcons/CustomBazarIcon";
import CustomDownloadIcon from "../SvgIcons/CustomDownloadIcon";
import CustomMyketIcon from "../SvgIcons/CustomMyketIcon";

export default function DownloadCta() {
  return (
    <section className="main-wrapper w-full bg-white py-24">
      <section className="download container flex flex-col-reverse lg:flex-row justify-between items-center mx-auto  px-24 py-8 rounded-2xl  text-white">
        {/* right section */}
        <div className="right flex flex-col gap-8">
          <h5 className=" text-2xl lg:text-4xl font-bold">
            جات توی <span className="custom-underline ">مالیکو</span> خالیه
          </h5>
          <p className="text-xl text-white/70">همین حالا نصبم کن</p>
          <div className="links-wrapper flex gap-4 flex-wrap">
            <a
              href="#"
              target="_blank"
              className="mt-8 bg-black text-white rounded-2xl py-3 w-content px-8 flex gap-3 items-center"
            >
              نصب از کافه بازار
              <CustomBazarIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className="mt-8 bg-black text-white rounded-2xl py-3 w-content px-8 flex gap-3 items-center"
            >
              نصب از مایکت
              <CustomMyketIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className="mt-8 bg-black text-white rounded-2xl py-3 w-content px-8 flex gap-3 items-center"
            >
              دانلود مستقیم اپ
              <CustomDownloadIcon />
            </a>
          </div>
        </div>

        {/* left section */}
        <Image src={appMockup} alt="install-app" width={300} height={300} />
      </section>
    </section>
  );
}
