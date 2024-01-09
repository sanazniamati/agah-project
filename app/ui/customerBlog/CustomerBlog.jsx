// library
import Link from 'next/link'
import Image from 'next/image'
// image
import sliderPic2 from '../../../public/img/sliderPic2.webp'
import sliderPic from '../../../public/img/sliderPic.webp'
import sliderPic5 from '../../../public/img/sliderPic5.webp'
import sliderPic1 from '../../../public/img/sliderPic1.webp'

function Part3() {
  return (
    <section className=" pt-20">
      <div className=" mx-auto w-full sm:w-[90%] lg:w-5/6">
        {/* header */}
        <div className=" lg:border-gray mx-auto flex w-full justify-center pb-8 lg:w-1/2 lg:border-t lg:text-xl">
          <h2 className=" relative -top-4 bg-white px-4 font-font1 font-bold ">
            بلاگ بآشگاه مشتریان کارگزاری آگاه
          </h2>
        </div>
        {/* main */}
        <div className=" grid grid-cols-1 place-content-center place-items-center lg:grid-cols-4">
          {contents.map((item) => (
            <div key={item.id} className="mx-4 ">
              <Link href={'/'}>
                <figure className=" w-full rounded border py-3 ">
                  <div className=" flex w-full justify-center">
                    <Image src={item.src} alt="" width={350} height={350} />
                  </div>
                  <figcaption className=" px-10 py-4 text-center font-font1 font-bold">
                    {item.figcaption}
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Part3

const contents = [
  {
    id: 0,
    figcaption: ' احراز هویت غیرحضوری کارگزاری آگاه | ثبت نام رایگان سجام ',
    src: sliderPic2,
  },
  {
    id: 1,
    figcaption: 'آموزش خرید و فروش سهام در بورس + راهنمای تصویری',
    src: sliderPic,
  },
  {
    id: 2,
    figcaption: 'نحوه تغییر کارگزار ناظر در پنل معاملاتی آگاه',
    src: sliderPic5,
  },

  {
    id: 3,
    figcaption: 'احراز هویت غیرحضوری کارگزاری آگاه و ثبت نام رایگان سجام',
    src: sliderPic1,
  },
]
