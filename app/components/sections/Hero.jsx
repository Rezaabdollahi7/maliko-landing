import orbit from "@/public/images/Orbit.svg";
import cup from "@/public/images/Mockup.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="hero grid grid-cols-5  max-w-7xl mx-auto my-32 px-32 pt-28 pb-32 bg-primary text-white rounded-2xl gap-12 relative ">
      <div className="col-span-3 flex flex-col gap-y-12">
        <h3 className="text-xl font-bold ">
          حساب مالی ای که همیشه واضح است...
        </h3>
        <h1 className="text-5xl font-bold ">اپلکیشن مدیریت مالی مالیکو</h1>
        <p className="text-lg ">
          سلام این یک تست از نرم افزار حسابداری و مدیریت مالی مالیکو است که توسط
          رضا و یگانه طراحی و توسعه داده شده است که خیلی هم عالی و خوب است
        </p>
        <button className="bg-white rounded-full px-6 py-2 text-primary w-max font-semibold ">
          درخواست مشاوره
        </button>
      </div>
      <div className="col-span-2 flex justify-center items-center relative">
        <Image
          src={orbit}
          alt="orbit-img"
          className="aspect-square size-12/12  "
        />
        <Image
          src={cup}
          className="absolute size-[40rem] rotate-[-5deg] "
          alt="cup-img"
        />
      </div>
      {/* bottom right texts */}
      <div className=" py-4 px-4 bg-gray-100 rounded-tl-4xl flex flex-col justify-center items-center absolute bottom-0">
        <div className="absolute size-6 bg-gray-100 -top-6 right-0  ">
          <div className="bg-primary size-6 rounded-br-4xl"></div>
        </div>
        <p className="text-text text-3xl font-semibold  ">۸+</p>
        <p className="text-text text-xl font-bold">سال تجربه</p>
        <div className="absolute size-6 bg-gray-100 -left-6 bottom-0  ">
          <div className="bg-primary size-6 rounded-br-4xl"></div>
        </div>
      </div>
      {/* top right texts */}
      <div className=" py-4 px-4 bg-gray-100 rounded-br-4xl flex flex-col justify-center items-center absolute top-0 left-0">
        <div className="absolute size-6 bg-gray-100 -right-6 top-0  rotate-180">
          <div className="bg-primary size-6 rounded-br-4xl"></div>
        </div>
        <p className="text-text text-3xl font-semibold  ">۸۰۰+</p>
        <p className="text-text text-xl font-bold"> کاربر فعال </p>
        <div className="absolute size-6 bg-gray-100 -bottom-6 left-0 rotate-180  ">
          <div className="bg-primary size-6 rounded-br-4xl"></div>
        </div>
      </div>
    </section>
  );
}
