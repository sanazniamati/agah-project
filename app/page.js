// component
import Header from "./ui/header/Header";
import Part2 from "./ui/section-two/Part2";
import Part3 from "./ui/section-three/Part3";
import Part4 from "./ui/section-four/part4";
import Footer from "./ui/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-20 min-h-screen flex flex-col w-full">
        <Part2 />
        <Part3 />
        <Part4 />
      </main>
      <Footer />
    </>
  );
}
