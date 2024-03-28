import { fundamentals } from "../../../data/data";
import reactLogo from "../../../assets/react.png";
export function ContentCards() {
  return (
    <section className="bg-neutral-100">
      <div className="flex flex-col items-center px-4 py-32 ">
        <h2 className="mb-2 text-4xl font-bold text-sky-500 sm:text-6xl">
          Fundamentos
        </h2>
        <h3 className="mb-8 text-2xl text-neutral-600">
          O quê dominar antes do React
        </h3>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mx-auto xl:max-w-[960px]">
          {fundamentals.map(({ id, title, content }) => (
            <ContentCard key={id} title={title} content={content} />
          ))}
        </ul>
      </div>
    </section>
  );
}

const ContentCard = ({ title, content }) => {
  return (
    <li className="h-64 cursor-pointer overflow-hidden  rounded-md text-neutral-600 shadow-md hover:opacity-90">
      <img
        className="h-28 w-full object-cover"
        src={reactLogo}
        alt="imagem ilustrativa do react"
      />
      <div className="p-4">
        <h3 className="mb-1 text-sky-500">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </li>
  );
};
