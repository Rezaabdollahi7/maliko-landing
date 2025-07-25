import myAnimation1 from "@/public/animations/Animation.json";
import myAnimation2 from "@/public/animations/Finance.json";
import myAnimation3 from "@/public/animations/Ai-powered marketing tools abstract.json";
import myAnimation4 from "@/public/animations/shopping cart.json";

export const FEATURES = [
  {
    id: 1,
    animation: myAnimation3,
    title: "هوش مصنوعی",
    description:
      "ما با کمک پیشرفته‌ترین هوش مصنوعی‌ها آمار دخل و خرجتو درمیاریم",
    animationSize: "50%",
    side: "right",
  },
  {
    id: 2,
    animation: myAnimation1,
    title: "سرمایه‌گذاری",
    description: "اینجا با مالیکو یاد میگیری چطوری سکه‌هاتو بذاری رو هم",
    animationSize: "50%",
    side: "left",
  },
  {
    id: 3,
    animation: myAnimation4,
    title: "تخته گاز به سوی خرید",
    description: "دیگه غصه‌ی چی بخرم چی نخرمو نداری",
    animationSize: "50%",
    side: "right",
  },
  {
    id: 4,
    animation: myAnimation2,
    title: "مقایسه‌گر شو",
    description: "خودتو با قبلا مقایسه کن ببین چقدر رشد کردی",
    animationSize: "65%",
    side: "left",
  },
];
