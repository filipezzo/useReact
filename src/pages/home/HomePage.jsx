import { Layout } from "../../layout/Layout";
import { ContentCards } from "./components/ContentCards";
import { Hero } from "./components/Hero";
import { Description } from "./components/Description";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";

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
