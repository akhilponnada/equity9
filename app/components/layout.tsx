import Header from "./header"
import Footer from "./footer"
import TopStrip from "./top-strip"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopStrip />
      <Header />
      <main className="flex-grow pb-[10px]">{children}</main>
      <Footer />
    </div>
  )
}

