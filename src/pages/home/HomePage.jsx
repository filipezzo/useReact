import { Layout } from "../../layout/Layout";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { ContentCards } from "./components/ContentCards";
import { Description } from "./components/Description";
import { Hero } from "./components/Hero";

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <ContentCards />
      <Description />
      <Banner />
      <Contact />
    </Layout>
  );
}
