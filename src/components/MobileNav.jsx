import { Atom, Home, Wifi } from "lucide-react";
import { NavLink } from "react-router-dom";

export function MobileNav() {
  return (
    <div className="sticky bottom-0 z-10  flex h-14 w-full max-w-full content-center items-center justify-center bg-neutral-100 dark:bg-stone-950 sm:hidden  ">
      <MobileNavItem to="/blog" icon={<Wifi size={24} />} text="Blog" />
      <MobileNavItem to="/" icon={<Home size={24} />} text="Home" />
      <MobileNavItem
        to="https://react.dev"
        icon={<Atom size={24} />}
        text="React Doc"
        varient
      />
    </div>
  );
}

const MobileNavItem = ({ icon, text, to, varient }) => {
  return (
    <NavLink
      to={to}
      target={varient ? "_blank" : null}
      end
      className={({ isActive }) => {
        return (
          " flex min-w-20 max-w-40 flex-1 flex-col items-center justify-center gap-1 " +
          (isActive ? " font-bold text-emerald-500" : " text-sky-500")
        );
      }}
    >
      {icon}
      <span className="text-xs">{text}</span>
    </NavLink>
  );
};
