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
      className={` group flex h-64 w-full cursor-pointer  flex-col justify-center gap-4  rounded-md border bg-sky-500 p-8 text-neutral-300 shadow-md transition-all  duration-300 hover:bg-sky-700 hover:opacity-90  ${isLast ? " mb-12 sm:col-span-2 sm:items-center md:col-auto md:items-start" : "items-start"}`}
    >
      <Logo className="w-20 self-center " />
      <h2 className="group-hover text-2xl font-bold text-sky-500 group-hover:text-white group-hover:opacity-80">
        {title}
      </h2>
      <p className="">{subtitle}</p>
    </li>
  );
}
