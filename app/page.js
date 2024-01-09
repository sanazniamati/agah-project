// component
import Header from './ui/header/Header'
import Banner from './ui/banner/Banner'
import Inventors from './ui/inventors/Inventors'
import CustomerBlog from './ui/customerBlog/CustomerBlog'
import Productivity from './ui/productivity/Productivity'
import Footer from './ui/footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-20 flex min-h-screen w-full flex-col">
        <Banner />
        <Inventors />
        <CustomerBlog />
        <Productivity />
      </main>
      <Footer />
    </>
  )
}
