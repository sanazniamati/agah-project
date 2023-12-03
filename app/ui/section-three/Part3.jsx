// library
import Link from "next/link";
import Image from "next/image";
// image
import sliderPic2 from "../../../public/img/sliderPic2.webp";
import sliderPic from "../../../public/img/sliderPic.webp";
import sliderPic5 from "../../../public/img/sliderPic5.webp";
import sliderPic1 from "../../../public/img/sliderPic1.webp";

function Part3(props) {
  return (
    <section className=" pt-20">
      <div className=" w-full mx-auto sm:w-[90%] lg:w-5/6">
        {/* header */}
        <div className=" w-full flex justify-center mx-auto pb-8 lg:w-1/2 lg:border-t lg:border-gray lg:text-xl">
          <h2 className=" bg-white -top-4 px-4 font-bold font-font2 relative ">
            بلاگ بآشگاه مشتریان کارگزاری آگاه
          </h2>
        </div>
        {/* main */}
        <div className=" grid grid-cols-1 lg:grid-cols-4 place-items-center place-content-center">
          {contents.map((item) => (
            <div key={item.id} className="mx-4 ">
              <Link href={"/"}>
                <figure className=" w-full py-3 border rounded ">
                  <div className=" flex justify-center w-full">
                    <Image src={item.src} alt="" width={350} height={350} />
                  </div>
                  <figcaption className=" px-10 py-4 font-bold text-center">
                    {item.figcaption}
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Part3;

const contents = [
  {
    id: 0,
    figcaption: " احراز هویت غیرحضوری کارگزاری آگاه | ثبت نام رایگان سجام ",
    src: sliderPic2,
  },
  {
    id: 1,
    figcaption: "آموزش خرید و فروش سهام در بورس + راهنمای تصویری",
    src: sliderPic,
  },
  {
    id: 2,
    figcaption: "نحوه تغییر کارگزار ناظر در پنل معاملاتی آگاه",
    src: sliderPic5,
  },

  {
    id: 3,
    figcaption: "احراز هویت غیرحضوری کارگزاری آگاه و ثبت نام رایگان سجام",
    src: sliderPic1,
  },
];
