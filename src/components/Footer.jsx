import { Link, useLocation } from "react-router-dom";

const footerHomeNav = [
  {
    id: 1,
    title: "acessar o blog",
    to: "/blog",
  },

  {
    id: 2,
    title: "realizar contato",
    to: "#contato",
  },

  {
    id: 3,
    title: "saiba mais",
    to: "#sobre",
  },
];

const footerBlogNav = [
  {
    id: 1,
    title: "home",
    to: "/",
  },

  {
    id: 2,
    title: "React Docs",
    to: "https://react.dev/",
  },

  {
    id: 3,
    title: "meu github",
    to: "https://github.com/filipezzo",
  },

  {
    id: 4,
    title: "meu linkedin",
    to: "https://www.linkedin.com/in/fiavanzzo/",
  },
];

export function Footer() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  let route = footerHomeNav;
  if (!isHome) {
    route = footerBlogNav;
  }
  return (
    <footer
      className={` absolute left-0 mt-auto h-12 w-full appearance-none gap-4 bg-sky-500 text-neutral-100  dark:bg-stone-900/40  ${isHome ? "bottom-14 md:bottom-0" : "bottom-0"}`}
    >
      <nav className="flex h-full w-full items-center gap-4  p-4">
        <div className="flex w-full max-w-2xl items-center gap-4   whitespace-nowrap">
          {route.map(({ id, title, to }) => (
            <FooterLink key={id} title={title} to={to} />
          ))}
        </div>
      </nav>
    </footer>
  );
}

const FooterLink = ({ title, to }) => {
  const styles = "flex-1  text-center text-sm font-medium uppercase";
  if (to === "#sobre") {
    return (
      <a className={styles} href={to}>
        {title}
      </a>
    );
  }

  if (to.startsWith("http")) {
    return (
      <Link className={styles} to={to} target="_blank">
        {title}
      </Link>
    );
  }
  return (
    <Link className={styles} to={to}>
      {title}
    </Link>
  );
};
