import LeftSide from './LeftSide'
import RightSide from './RightSide'

function Header() {
  return (
    <div className=" fixed top-0 z-50 h-20 w-full bg-white shadow-2xl">
      <div className="  mx-auto w-full px-5">
        <div className=" mx-auto flex h-20 w-full items-center justify-between xl:w-5/6 ">
          <RightSide />
          <LeftSide />
        </div>
      </div>
    </div>
  )
}

export default Header
