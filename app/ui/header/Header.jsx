import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Header() {
  return (
    <div className=" w-full h-20 fixed top-0 z-50  bg-white shadow-2xl">
      <div className="  px-5 mx-auto w-full">
        <div className=" flex justify-between items-center w-full h-20 xl:w-5/6 mx-auto ">
          <RightSide />
          <LeftSide />
        </div>
      </div>
    </div>
  );
}

export default Header;
