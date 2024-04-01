import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../../data/data";
import { Layout } from "../../layout/Layout";

export function DetailsPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const filteredSelectedPost = posts.filter((post) => post.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (filteredSelectedPost.length === 0) {
      nav("/");
    }
  }, [filteredSelectedPost, nav]);

  return (
    <Layout>
      <section className=" p-8 px-2 text-neutral-600 dark:bg-stone-950 dark:text-white sm:px-6">
        {filteredSelectedPost.map(
          ({ id, content: { title, paragraphs, image } }) => (
            <div
              key={id}
              className="mx-auto   flex w-[900px] max-w-full flex-col gap-6 leading-[1.15]"
            >
              <h1 className="pt-12 text-center text-[clamp(1.5rem,6vw,4.1rem)] font-bold text-black dark:text-sky-500  ">
                {title}
              </h1>
              <div>
                {paragraphs.map((p, index) => (
                  <p
                    className="mx-auto my-4 max-w-[700px] px-1 text-sm font-medium  md:text-base"
                    key={index}
                  >
                    {p.p}
                  </p>
                ))}
              </div>

              {title.toLowerCase().startsWith("baankai") && (
                <p className=" max-w-[700px]font-bold mx-auto my-4 text-sky-500">
                  by Filipe Avanzzo 🙋
                </p>
              )}

              <img
                className="mx-auto h-full max-h-[300px] w-full max-w-[700px] rounded-md object-cover pb-8 "
                src={image}
                loading="lazy"
                alt={`imagem sobre conteudo do ${title}`}
              />
            </div>
          ),
        )}
      </section>
    </Layout>
  );
}
