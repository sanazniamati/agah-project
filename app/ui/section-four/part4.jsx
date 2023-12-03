import Image from "next/image";
import management from "../../../public/img/management2.webp";
import efficiency from "../../../public/img/efficiency.webp";
import branches from "../../../public/img/branches.webp";
import cutomers from "../../../public/img/cutomers.webp";
import employee from "../../../public/img/employee.webp";

function part4(props) {
  return (
    <section className="pt-10 w-full">
      <div className=" w-full flex items-center bg-branch bg-no-repeat bg-fixed bg-center min-h-[400px] py-10 ">
        <div className=" w-full h-full mx-auto ">
          <div className=" grid grid-cols-1 text-center font-font1 text-white items-center place-items-center gap-y-12 h-full lg:grid-cols-2 xl:grid-cols-5">
            {contents.map((item) => (
              <div key={item.id} className="text-white text-center">
                <Image
                  src={item.src}
                  alt=""
                  width={150}
                  height={150}
                  className=" w-auto h-auto"
                />
                <div className="pt-4">
                  {item.caption1}
                  <span className=" font-bold text-xl px-1">
                    {item.caption2}
                  </span>
                  {item.caption3}
                </div>
                <div>{item.caption4}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default part4;

const contents = [
  {
    id: 0,
    src: management,
    caption1: "بیش از",
    caption2: "154000",
    caption3: "میلیارد ریال",
    caption4: "دارایی تحت وب",
  },
  {
    id: 1,
    src: efficiency,
    caption1: "بیش از",
    caption2: "69000",
    caption3: "درصد",
    caption4: "بازدهی در 14 سال",
  },
  {
    id: 2,
    src: branches,
    caption1: "بیش از",
    caption2: "100",
    caption3: "شعبه",
    caption4: "در سراسر کشور",
  },
  {
    id: 3,
    src: cutomers,
    caption1: "بیش از",
    caption2: "5000000",
    caption3: "نفر",
    caption4: "تعداد مشتریان",
  },
  {
    id: 4,
    src: employee,
    caption1: "بیش از",
    caption2: "1300",
    caption3: "نفر",
    caption4: "تعداد کارکنان",
  },
];
