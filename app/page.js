import Link from "next/link";
import Footer from "./ui/Footer";
import Header from "./ui/header/Header";
import Image from "next/image";
import Part2 from "./ui/section-two/Part2";
import Part3 from "./ui/section-three/Part3";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-20 min-h-screen flex flex-col w-full">
        <section
          className=" pb-20 flex items-end justify-center relative
          bg-autoAgah bg-cover bg-top h-[600px] w-full bg-no-repeat overflow-hidden
           md:h-[800px] lg:items-center lg:justify-end  lg:h-[700px]           
          //  lg:bg-[center_bottom_1rem]
           "
        >
          <div className=" flex justify-center items-center w-full md:w-1/2">
            <h2
              className=" text-2xl font-black text-darkPurpel text-center pb-2 font-font1
             lg:text-5xl lg:text-right"
            >
              <span className=" text-3xl font-black lg:text-6xl">اتو آگاه</span>
              <br />
              نماد همیشه نقد خودرویی!
              <div className="mt-8">
                <Link
                  href={"/"}
                  className=" text-white text-base bg-darkblue px-14 py-2 rounded-lg z-50 mt-10 hover:shadow-lg"
                >
                  اطلاعات بیشتر
                </Link>
              </div>
            </h2>
          </div>

          {/* 3 btn darkblue */}
          <div
            className=" absolute hidden bottom-20 right-10 
           lg:flex justify-start items-start"
          >
            <div className=" flex flex-col justify-end gap-5 ">
              <div className=" rounded-xl shadow-sm shadow-white w-56 px-4 bg-darkblue ">
                <Link className=" group" href={"/"}>
                  <div className=" group-hover:shadow-lg flex justify-around items-center ">
                    <div className=" text-white border-l pl-4 border-white flex items-center py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="transition-all delay-75 duration-100 h-10 w-10 text-white group-hover:rotate-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        ></path>
                      </svg>
                    </div>
                    <div className=" text-white  text-base font-font2">
                      مدیریت دارایی
                    </div>
                  </div>
                </Link>
              </div>
              <div className=" rounded-xl shadow-sm shadow-white  w-56 px-4 bg-darkblue ">
                <Link href={"/"} className="group">
                  <div className=" group-hover:shadow-lg flex justify-around items-center ">
                    <div className=" text-white border-l pl-4 border-white flex items-center py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="transition-all delay-75 duration-100 h-10 w-10 text-white group-hover:rotate-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className=" text-white  text-base font-font2">
                      دوره های آموزشی
                    </div>
                  </div>
                </Link>
              </div>
              <div className=" rounded-xl shadow-sm shadow-white w-56 px-4 bg-darkblue ">
                <Link href={"/"}>
                  <div className=" hover:shadow-lg flex justify-around items-center ">
                    <div className=" text-white border-l pl-4 border-white flex items-center py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="transition-all delay-75 duration-100 h-10 w-10 text-white group-hover:rotate-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        ></path>
                      </svg>
                    </div>
                    <div className=" text-white  text-base font-font2">
                      آگاه در یک نگاه
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Part2 />
        <Part3 />
      </main>
      <Footer />
    </>
  );
}
