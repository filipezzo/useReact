import { useNavigate } from "react-router-dom";
import { Logo } from "../../../components/Logo";
export function Card({ title, subtitle, id, isLast }) {
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/blog/post/${id}`);
  };

  return (
    <li
      onClick={handleClick}
      className={` group flex h-64 w-full cursor-pointer  flex-col justify-center gap-4  rounded-md border bg-sky-900 p-8 text-neutral-300 shadow-md transition-all hover:stroke-cyan-200 ${isLast ? " sm:col-span-2 sm:items-center md:col-auto md:items-start" : "items-start"}`}
    >
      <Logo className="w-20 self-center group-hover:animate-spin" />
      <h2 className="text-2xl font-bold text-sky-500 group-hover:scale-105">
        {title}
      </h2>
      <p className="group-hover:scale-105">{subtitle}</p>
    </li>
  );
}
