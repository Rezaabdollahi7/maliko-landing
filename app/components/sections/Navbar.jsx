import Logo from "../../../public/icons/logo2.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="container mx-auto mt-4 flex items-center justify-between gap-5 ">
      <section className="flex space-x-16 py-2 w-7xl rounded-2xl px-6 bg-white items-center mx-auto justify-between   text-primary font-semibold  border-2     border-primary/20 ">
        <Image alt="maliko-logo" src={Logo} className="size-10 rounded-lg" />
        <div className="links flex gap-12">
          <a href="#" className=" px-4 rounded-4xl py-1">
            خانه
          </a>
          <a href="#" className=" px-4 rounded-4xl py-1">
            معرفی
          </a>
          <a href="#" className=" px-4 rounded-4xl py-1">
            امکانات
          </a>
          <a href="#" className=" px-4 rounded-4xl py-1">
            مشکلات
          </a>
          <a href="#" className=" px-4 rounded-4xl py-1">
            فوتر
          </a>
        </div>
        <div className="img-wrapper p-1 bg-primary rounded-full flex items-center gap-3 px-3 text-white font-bold shadow-xs shadow-primary border-2 border-white ">
          <p className="mr-3">دانلود </p>
          <Image
            alt="maliko-logo"
            src={Logo}
            className="size-10 rounded-full"
          />
        </div>
      </section>
    </nav>
  );
}
