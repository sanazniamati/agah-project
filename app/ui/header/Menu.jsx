"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

function Menu(props) {
  const [modal, setModal] = useState(true);

  const handleCloseMenu = () => {
    setModal(false);
    console.log(" menu:" + modal);
  };
  return (
    <div className=" lg:hidden">
      {modal ? (
        <div className=" bg-green-400 fixed right-0 inset-y-0 w-full h-full mt-20 z-20 overflow-y-auto">
          <div className=" h-[100vh] w-full px-6 pt-10 bg-white ">
            {/* close btn */}
            <div className=" flex justify-end items-center">
              <button className=" -m-2.5 p-2.5 " onClick={handleCloseMenu}>
                <IoCloseOutline size={34} />
              </button>
            </div>

            {/* nav menu */}
            <div className=" mt-6">
              <div className=" mb-10 pb-32 h-full">
                <div className=" py-6 space-y-2">
                  <Link
                    href={"/"}
                    className="font-bold text-darkBlue font-iranSans text-sm"
                  >
                    خانه
                  </Link>
                  {menuItems.map((item) => (
                    <div
                      key={item.id}
                      className=" border-b border-gray-300 text-sm flex items-center justify-between py-2
                   leading-7 text-darkblue font-bold font-iranSans hover:bg-gray-50 "
                    >
                      {item.menu}
                      <MdKeyboardArrowDown size={24} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className=" fixed bottom-0 border-t w-full sm:w-[448px] right-0 py-4 bg-white">
            <div className="flex flex-row justify-center items-center gap-5 w-full px-4 mx-auto text-center">
              <Link
                href={""}
                className=" bg-darkblue rounded text-white font-iranSans w-full py-2 text-sm px-2.5 hover:shadow-xl"
              >
                آگاه در یک نگاه
              </Link>
              <Link
                href={""}
                className=" border w-full rounded py-2 font-iranSans text-sm"
              >
                شعب آگاه
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-0 h-0" />
      )}
    </div>
  );
}

export default Menu;

const menuItems = [
  { id: 0, menu: "مدیریت دارایی", subMenu: [] },
  { id: 1, menu: "راهنمای معاملات", subMenu: [] },
  { id: 2, menu: "آموزش", subMenu: [] },
  { id: 3, menu: "درباره آگاه", subMenu: [] },
  { id: 4, menu: "همکاری با آگاه", subMenu: [] },
];
