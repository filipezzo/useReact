import { Atom, Github, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "./Drawer";
import { Backdrop } from "./Backdrop";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const handleClosingDrawer = () => setIsDrawerOpen(false);
  return (
    <header className="sticky left-auto right-0 top-0 z-50 flex  min-h-14 w-full   items-center  bg-neutral-100 px-4 text-neutral-400 shadow-md lg:min-h-16 lg:px-6">
      <Link to="/" className="mr-12 flex items-center gap-3">
        <Atom className="h-9 w-9 text-sky-500" />
        <span className="text-base text-sky-500">
          <span className="text-neutral-400">use</span>React
        </span>
      </Link>
      <nav className="hidden lg:flex lg:gap-8 lg:text-sm lg:font-medium lg:uppercase  lg:text-sky-300">
        {isHome ? (
          <>
            <Link to="/blog">acessar o blog</Link>
            <a href="#contato">realizar contato</a>
          </>
        ) : (
          <Link to="/">Acessar o home</Link>
        )}
      </nav>
      <div className="flex flex-1 items-center justify-end  gap-5 text-sky-500  ">
        <Link to="https://github.com/filipezzo" target="_blank">
          <Github className="h-6 w-6" />
        </Link>
        <button onClick={() => setIsDrawerOpen((prev) => !prev)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isDrawerOpen && <Backdrop />}
      {isDrawerOpen && <Drawer onClosingDrawer={handleClosingDrawer} />}
    </header>
  );
}
