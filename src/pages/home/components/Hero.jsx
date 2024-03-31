import { Atom } from "lucide-react";

export function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center bg-sky-500 px-4 py-32 dark:bg-stone-950 ">
        <Atom className="h-64 w-64" />
        <h1 className="mb-4 mt-12 text-4xl sm:text-5xl">Aprenda React</h1>
        <h2 className="text-xl font-light sm:text-3xl">
          <pre>set🧠([...🧠, React])</pre>
        </h2>
      </div>
    </section>
  );
}
