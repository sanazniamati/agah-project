"use client";
import Link from "next/link";
import Image from "next/image";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";
import Menu from "./Menu";

function RightSide(props) {
  const [modal, setModal] = useState(false);

  const handleOpenMenu = () => {
    setModal((modal) => !modal);
    console.log(" :" + modal);
  };
  return (
    <div className=" flex items-center lg:gap-8 ">
      <div className=" mt-4">
        <button className=" p-2.5" onClick={handleOpenMenu}>
          <GrMenu className=" h-10 w-10 ml-2 lg:hidden" />
        </button>
        {modal ? <Menu /> : null}
      </div>
      <Link href={"/"}>
        <Image
          src="https://agah.com/images/agah-logo.svg"
          alt="logo agah"
          width={120}
          height={58}
          className=" bg-transparent h-auto"
        />
      </Link>
      <nav class="w-full mx-auto hidden lg:flex">
        <ul className="flex w-full gap-6">
          {navButtons.map((item) => (
            <li
              key={item.id}
              className="h-20 flex items-center font-medium font-font1 hover:opacity-90 text-darkblue opacity-90"
            >
              <Link href={"/"} className="hover:text-darkFont">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default RightSide;

const navButtons = [
  { id: 0, title: "خانه ", className: "" },
  { id: 1, title: " راهنمای معاملات", className: "" },
  { id: 2, title: "مدیریت دارایی ", className: "" },
  { id: 3, title: " آموزش", className: "" },
  { id: 4, title: "همکاری با آگاه ", className: "" },
  { id: 5, title: " درباره آگاه", className: "" },
];
