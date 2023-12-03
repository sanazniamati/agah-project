import Link from "next/link";
import React from "react";

function Header(props) {
  return (
    <div className=" w-full h-20 fixed top-0 z-50  bg-white shadow-2xl">
      <div className=" bg-pink-300 px-5 mx-auto w-full">
        <div className=" flex justify-between items-center w-full h-20 ">
          <div className=" bg-green-500">
            <Link
              href={"/"}
              className=" bg-darkblue text-white text-sm py-2 px-2.5 rounded-lg font-font3  "
            >
              افتتحاح حساب
            </Link>
          </div>
          <div className=" bg-red-500 flex items-center gap-2">
            افتتحاح حساب
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
