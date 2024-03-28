import { Layout } from "../../layout/Layout";
import { HeroBlog } from "./components/HeroBlog";
import { BlogList } from "./components/BlogList";
import { posts } from "../../data/data";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
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
