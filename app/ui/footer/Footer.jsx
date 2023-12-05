import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
  FaArrowLeft,
} from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import enamad from "../../../public/img/enamad.png";
import cafebazar from "../../../public/img/Cafebazar.webp";
import sibapp from "../../../public/img/sibapp.webp";
import sibche from "../../../public/img/sibche.webp";

function Footer(props) {
  return (
    <footer className=" w-full px-10 pb-10 z-5 pt-14 bg-magnolia ">
      <div className=" w-full mx-auto sm:w-[90%] lg:w-[75%]">
        <div className="grid h-full grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {/* section 1 */}
          <div className="  w-full text-right">
            <div className=" text-lg font-bold">دسترسی سریع</div>
            <ul>
              {quickAccess.map((item) => (
                <li
                  key={item.id}
                  className=" text-sm font-medium leading-8 hover:text-darkblue"
                >
                  <Link href={item.href} target="_blank">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* section 2 */}
          <div className=" w-full text-right">
            <div className=" text-lg font-bold">گروه آگاه </div>
            <ul>
              {agahGroups.map((item) => (
                <li
                  key={item.id}
                  className=" text-sm font-medium leading-8 hover:text-darkblue"
                >
                  <Link href={item.href} target="_blank">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* section 3 */}
          <div className="  w-full text-right">
            <div className=" text-lg font-bold"> آدرس دفتر مرکزی</div>
            <div className=" text-sm font-medium leading-8">
              تهران- خیابان نلسون ماندلا(آفریقا)- بالاتر از میرداماد- بن بست
              پیروز - پلاک 13
            </div>
            <div className=" pt-4 text-lg font-bold">شماره تماس</div>
            <Link href={"/"}>تلفن: 02191004004</Link>
            <div className=" pt-4 text-lg font-bold">پست الکترونیکی</div>
            <Link href={"/"}>info@agah.com</Link>
            <div className=" flex justify-start items-center gap-4 pt-4">
              {socialIcons.map((item) => (
                <div key={item.id} className=" group">
                  <Link
                    href={"/"}
                    className=" bg-white w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group-hover:bg-black "
                  >
                    {item.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* section 4 */}
          <div className=" flex justify-center w-full mt-0 md:mt-10">
            <Link href={""}>
              <Image src={enamad} alt="" width={130} height={180} />
            </Link>
          </div>
        </div>

        {/* box aplications */}
        <div className=" w-full p-10 mx-auto rounded-lg bg-slate-500 mt-9">
          <div className="py-2 grid grid-cols-12 gap-4">
            {/* section 1 */}
            <div className=" col-span-12 md:col-span-6">
              <div className=" text-sm font-medium text-white">
                اپلیکیشن آساتریدر
              </div>
              <div className=" flex gap-4 pt-4">
                {apps.map((item) => (
                  <div
                    key={item.id}
                    className=" px-2 py-1 rounded bg-gradient-to-t from-prussianblue to-darkgray hover:from-darkblue"
                  >
                    <Link href={item.link}>
                      <Image src={item.img} alt="" width={80} height={80} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* section 2 */}
            <div className=" col-span-12 md:col-span-6 lg:col-span-3">
              <ul>
                <li className=" text-white">
                  <Link
                    href={"/"}
                    className=" flex items-center gap-1 text-sm font-medium leading-8 hover:opacity-75"
                  >
                    <FaArrowLeft className=" w-4 h-4" />
                    <p className=" font-font1"> فست بورس</p>
                  </Link>
                </li>
                <li className=" text-white">
                  <Link
                    href={"/"}
                    className=" flex items-center gap-1 text-sm font-medium leading-8 hover:opacity-75"
                  >
                    <FaArrowLeft className=" w-4 h-4" />
                    <p className=" font-font1"> اپلیکیشن آموزش</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" pt-4 text-sm font-font1 font-bold text-center ">
          کلیه حقوق وبسایت متعلق به کارگزاری آگاه است و استفاده از مطالب این
          سایت تنها با ذکر منبع بلامانع است
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const quickAccess = [
  { id: 0, title: "درباره آگاه", href: "https://agah.com/about-agah" },
  { id: 1, title: "تماس با آگاه", href: "https://agah.com/contact-us" },
  { id: 2, title: "همکاری با آگاه", href: "https://jobs.agah.com" },
  { id: 3, title: "شعب کارگزاری", href: "https://agah.com/agah-branches" },
  { id: 4, title: "شماره حساب ها", href: "https://agah.com/bank-accounts" },
];

const agahGroups = [
  {
    id: 0,
    title: "آگاه اکسپرس ",
    href: "https://ex.agah.com/?_gl=1*jp4hmw*_ga*NjIzNTA5ODIuMTcwMTU3Njc1Mg..*_ga_GR91H3G2Q7*MTcwMTY2NDEzOS4zLjEuMTcwMTY2NTE5Mi4wLjAuMA..",
  },
  { id: 1, title: " باشگاه", href: "https://bashgah.com/Intro" },
  {
    id: 2,
    title: " آوای آگاه",
    href: "https://ava.agah.com/?_gl=1%2azf3nca%2a_ga%2aNjIzNTA5ODIuMTcwMTU3Njc1Mg..%2a_ga_GR91H3G2Q7%2aMTcwMTY2NDEzOS4zLjEuMTcwMTY2NTU0OS4wLjAuMA..",
  },
  { id: 3, title: "مدیریت دارایی آگاه ", href: "https://agahinvest.com/" },
  { id: 4, title: " ویستا سامانه آسا", href: "https://asax.ir/" },
  {
    id: 5,
    title: "تامین سرمایه ",
    href: "https://agah.com/investment-services",
  },
];

const socialIcons = [
  { id: 0, icon: <FaInstagram className=" group-hover:invert" /> },
  { id: 1, icon: <FaTelegramPlane className=" group-hover:invert" /> },
  { id: 2, icon: <FaLinkedinIn className=" group-hover:invert" /> },
  { id: 3, icon: <FaTwitter className=" group-hover:invert" /> },
  { id: 4, icon: <SiAparat className=" group-hover:invert" /> },
];

const apps = [
  { id: 0, img: sibche, link: "https://sibche.com/applications/asa-trader-1" },
  { id: 0, img: sibapp, link: "https://sibapp.com/applications/asatrader" },
  {
    id: 0,
    img: cafebazar,
    link: "https://cafebazaar.ir/app/com.agah.asatrader",
  },
];
