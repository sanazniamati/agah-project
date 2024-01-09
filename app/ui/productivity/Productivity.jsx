import Image from 'next/image'
import management from '../../../public/img/management2.webp'
import efficiency from '../../../public/img/efficiency.webp'
import branches from '../../../public/img/branches.webp'
import cutomers from '../../../public/img/cutomers.webp'
import employee from '../../../public/img/employee.webp'

function part4() {
  return (
    <section className="w-full pt-10">
      <div
        className=" flex min-h-[400px] w-full items-center bg-branch 
      bg-fixed bg-center bg-no-repeat py-10 "
      >
        <div className=" mx-auto h-full w-full sm:w-[90%] lg:w-5/6 ">
          <div
            className=" grid h-full grid-cols-1 place-items-center items-center gap-y-12 
          text-center font-font1 text-white lg:grid-cols-2 xl:grid-cols-5"
          >
            {contents.map((item) => (
              <div key={item.id} className="text-center text-white">
                <Image
                  src={item.src}
                  alt=""
                  // width={150}
                  // height={150}
                  className=" h-auto w-auto xl:h-[150px] xl:w-[150px]"
                />
                <div className="pt-4 font-font1">
                  {item.caption1}
                  <span className=" px-1 text-xl font-bold">
                    {item.caption2}
                  </span>
                  {item.caption3}
                </div>
                <div className="font-font1">{item.caption4}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default part4

const contents = [
  {
    id: 0,
    src: management,
    caption1: 'بیش از',
    caption2: '154000',
    caption3: 'میلیارد ریال',
    caption4: 'دارایی تحت وب',
  },
  {
    id: 1,
    src: efficiency,
    caption1: 'بیش از',
    caption2: '69000',
    caption3: 'درصد',
    caption4: 'بازدهی در 14 سال',
  },
  {
    id: 2,
    src: branches,
    caption1: 'بیش از',
    caption2: '100',
    caption3: 'شعبه',
    caption4: 'در سراسر کشور',
  },
  {
    id: 3,
    src: cutomers,
    caption1: 'بیش از',
    caption2: '5000000',
    caption3: 'نفر',
    caption4: 'تعداد مشتریان',
  },
  {
    id: 4,
    src: employee,
    caption1: 'بیش از',
    caption2: '1300',
    caption3: 'نفر',
    caption4: 'تعداد کارکنان',
  },
]
