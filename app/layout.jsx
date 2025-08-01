import "./globals.css";

export const metadata = {
  title: {
    default: "مالیکو: دستیار هوشمند مدیریت مالی شخصی و پس‌انداز",
    template: "%s | مالیکو",
  },

  description:
    "با مالیکو، مدیریت پول‌هاتون مثل آب خوردن میشه! هزینه‌ها رو از پیامک‌های بانکی خودکار ثبت کن، دسته‌بندی کن، آمار دقیق ببین و به راحتی پس‌انداز کن. دوست مالی شخصی شما، همیشه در جیبتان.",

  keywords: [
    "مالیکو",
    "اپلیکیشن مدیریت مالی",
    "مدیریت پول",
    "پس‌انداز",
    "حسابداری شخصی",
    "مدیریت هزینه‌ها",
    "بودجه‌بندی",
    "ثبت پیامک بانکی",
    "وام و اقساط",
    "ردیاب مالی",
    "اپلیکیشن ایرانی مالی",
  ],

  alternates: {
    canonical: "https://maliko.ir",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  viewport: "width=device-width, initial-scale=1",
  charSet: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased bg-gray-100`}>{children}</body>
    </html>
  );
}
