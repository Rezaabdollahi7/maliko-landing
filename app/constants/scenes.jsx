// Import animations
import smsAnimation from "@/public/animations/Verify code.json";
import chart from "@/public/animations/chart.json";
import signIn from "@/public/animations/Signin.json";
import transactionsAnimation from "@/public/animations/Transactions.json";
import Alert from "@/public/animations/Alert.json";
import friendAnimation from "@/public/animations/Friend.json";

const scenes = [
  {
    id: 0,
    title: "اولش فقط یه SMS بود...",
    subtitle: "ای بابا پولم کجا رفت ؟",
    background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
    narration:
      "داشتم لای ریلز های اینستاگرام میچرخیدم که یه SMS اومد... 🏦 *برداشت ۱،۳۷۰،۰۰۰ تومان از حساب شما.* قلبم افتاد تو پام 😰 کی برداشتم ؟  کجا خرج کردم باز ؟زدم روش و یکم فکر کردم  ولی چیزی یادم نیومد. تا اینکه... ✨ مالیکو ✨ اومد تو زندگیم!",
    animationSrc: smsAnimation,
  },
  {
    id: 1,
    title: "آشنایی با مالیکو 👀",
    subtitle: "رابطه جدید شروع شد!",
    background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    narration:
      "اولش فکر کردم یه برنامه ست دیگه  دو روز دیگه پاکش میکنم. ولی اون گفت: «بیا حالا شروع کن ...» حسابهای بانکیمو وارد کردم و گفتم: «آقا جان، SMSهای بانکی من از این شمارهها میان، حواست باشه!» اونم گفت: «اوکی داداش، از این به بعد خودم میفهمم چی به چیه!» 🤓",
    animationSrc: signIn,
  },
  {
    id: 2,
    title: "بزن بریم شنود! 🎧",
    subtitle: "مالیکو شد دوست فضول ولی مفید",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    narration:
      "از اون لحظه، مالیکو شد مثل یه دوست فضول ولی مفید! هر وقت SMS بانکی میاد، فوراً میپره وسط: 🔔 « ۲۲۰ تومن برداشتی ؟ برای چی آخه؟ » منم میگم: «داداش نون و پنیر گرفتم. نگران نباش ؟» 😎 و اون مینویسه: «ثبت شد! برو حال کن!» دیگه هیچ تراکنشی قایم نمیمونه ازم!",
    animationSrc: Alert,
  },
  {
    id: 3,
    title: "تراکنشات؟ مث آبِ تو لیوان! 🍹",
    subtitle: "همه چی شفاف و مرتب",
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    narration:
      "در ضمن  نیازی نیست هی وارد اپ بانک بشم تا تراکنشامو ببینم یا به روش سنتی بشینم وارد دفتر کنم ، همه تراکنشام خودکار تو مالیکو صف کشیدن! الان میتونم بگم: «پولام کجا رفتن؟ کی خرجشون کردم؟ کی واریز کرد؟» انگار یه آینه گذاشتن جلوی حساب کتابام! میتونم فیلتر کنم، سرچ کنم، دسته‌بندی کنم. همه چی مثل آب توی لیوان، شفاف و واضح!",
    animationSrc: transactionsAnimation,
  },
  {
    id: 4,
    title: "آمار و نمودار؟ بیا وسط! 📊",
    subtitle: "حقایق تلخ و شیرین مالی!",
    background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    narration:
      "مالیکو گراف کشیده، نمودار درآورده، میگه: «بیشترین پولتو تو ماه گذشته دادی به قهوه، کتاب و اسنپ!» ☕📚🚕 منم گفتم: «عه! از خودم خبر نداشتم!» اونم گفت: «مالی شدی، برار! مالی!».",
    animationSrc: chart,
  },
  {
    id: 5,
    title: "مالیکو، رفیق مالی من ❤️",
    subtitle: "رابطه جدی و ماندگار!",
    background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    narration:
      "الان یه رابطه جدی بین ماست. من خرج میکنم، اون میفهمه. اون میپرسه، من جواب میدم. وقتی دارم بی پول میشم، اون یادآوری میکنه بودجه بندیمو ! تازه یه تقویم داره که توش وام و چک و یادداشتامو نوشتم که جلو چشمم باشن .  خلاصه بگم: **مالیکو فقط یه اپ نیست که... نیمه ی حسابدار گمشدهمه!** 💕!",
    animationSrc: friendAnimation,
  },
];

export default scenes;
