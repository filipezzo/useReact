import { Link } from "react-router-dom";
import meme from "../assets/404meme.png";

export function ErrorPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 border">
      <img src={meme} />
      <Link className="rounded-md border  px-4 py-2" to="/">
        Salve o gato!
      </Link>
    </div>
  );
}
