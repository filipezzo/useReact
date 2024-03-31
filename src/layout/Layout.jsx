import { Toaster } from "react-hot-toast";
import { Header } from "../components/Header";
import { MobileNav } from "../components/MobileNav";
import { Footer } from "../components/Footer";

export function Layout({ children }) {
  return (
    <div className="h-full  bg-neutral-100">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileNav />
      <Toaster />
    </div>
  );
}
