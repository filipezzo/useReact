import { Card } from "./Card";

export function BlogList({ posts }) {
  if (!posts) {
    return null;
  }
  return (
    <section className=" bg-neutral-100 p-4  dark:border-t dark:bg-[#101010] ">
      <ul className="mx-auto my-8 grid  max-w-5xl grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 ">
        {posts.length > 0 ? (
          posts.map(({ ...props }, index) => (
            <Card
              key={props.id}
              isLast={index === posts.length - 1}
              {...props}
            />
          ))
        ) : (
          <strong className="text-2xl text-black">
            Esse Post não existe 🦥
          </strong>
        )}
      </ul>
    </section>
  );
}
