import { useEffect, useState } from "react";
import { posts } from "../../data/data";
import { useDebounce } from "../../hooks/useDebounce";
import { Layout } from "../../layout/Layout";
import { BlogList } from "./components/BlogList";
import { HeroBlog } from "./components/HeroBlog";
export function BlogPage() {
  const [searchValue, setSearchValue] = useState("");
  const delayValue = useDebounce(searchValue, 300);
  const filteredArr = posts.filter((post) =>
    post.title.toLowerCase().includes(delayValue.toLowerCase()),
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroBlog onChangeValue={setSearchValue} />
      <BlogList posts={filteredArr} />
    </Layout>
  );
}
