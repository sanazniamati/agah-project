import Link from "next/link";

function LeftSide(props) {
  return (
    <div className="  flex items-center gap-2 lg:gap-4">
      <Link
        href={"/"}
        className=" bg-darkblue text-white text-sm py-2 px-2.5 rounded-lg 
          font-font1 transition-all duration-300 
          hover:shadow-xl "
      >
        افتتاح حساب
      </Link>
      <Link
        className=" hidden sm:flex bg-darkblue text-white text-sm py-2 px-2.5 rounded-lg 
          font-font1 transition-all duration-300 
          hover:shadow-xl"
        href={"/"}
      >
        شعب آگاه
      </Link>
    </div>
  );
}

export default LeftSide;
