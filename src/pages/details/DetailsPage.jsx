import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { posts } from "../../data/data";
import { useEffect } from "react";

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
      <section className=" px-2 sm:px-6">
        {filteredSelectedPost.map(
          ({ id, content: { title, paragraphs, image } }) => (
            <div
              key={id}
              className="mx-auto mb-10  flex w-[900px] max-w-full flex-col gap-6 leading-[1.15]"
            >
              <h1 className="pt-12 text-center text-[clamp(1.5rem,6vw,4.1rem)] font-bold text-black  ">
                {title}
              </h1>
              <div>
                {paragraphs.map((p, index) => (
                  <p
                    className="mx-auto my-4 max-w-[700px] px-1 text-sm font-medium text-neutral-600 md:text-base"
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
                className="mx-auto h-full max-h-[300px] w-full max-w-[700px] rounded-md object-cover "
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
