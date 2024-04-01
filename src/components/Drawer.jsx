import {
  Atom,
  Github,
  Home,
  Linkedin,
  Mail,
  SearchX,
  Wifi,
} from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const HomeMenu = [
  {
    id: 1,
    icon: <Home />,
    content: "Home",
    to: "/",
  },

  {
    id: 2,
    icon: <Wifi />,
    content: "Acessar o blog",
    to: "/blog",
  },

  {
    id: 3,
    icon: <Mail />,
    content: "Realizar contato",
    to: "/#contato",
  },

  {
    id: 4,
    icon: <SearchX />,
    content: "Saiba mais",
    to: "/#sobre",
  },

  {
    id: 5,
    icon: <Atom />,
    content: "React Docs",
    to: "https://react.dev/learn",
  },
];

const Blogmenu = [
  {
    id: 1,
    icon: <Home />,
    content: "Home",
    to: "/",
  },

  {
    id: 2,
    icon: <Atom />,
    content: "React Docs",
    to: "https://react.dev/learn",
  },

  {
    id: 3,
    icon: <Github />,
    content: "Meu github",
    to: "https://github.com/filipezzo",
  },

  {
    id: 4,
    icon: <Linkedin />,
    content: "Meu Linkedin",
    to: "https://www.linkedin.com/in/fiavanzzo/",
  },
];
const animation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  z-index: 60;
  width: 256px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  outline: 0;
  overflow-y: auto;
  transform: none;
  background: white;
  animation: ${animation} 0.3s ease forwards;
  box-shadow:
    0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);
`;

const List = styled.ul`
  padding-block: 8px;
`;

const Item = styled.li`
  padding: 8px 16px;

  cursor: pointer;
  &:hover {
    color: #0ea5e9;
  }
`;

const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  gap: 38px;
`;

export function Drawer({ onClosingDrawer }) {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const handleClose = useCallback(() => {
    onClosingDrawer();
  }, [onClosingDrawer]);

  let route = HomeMenu;

  if (pathname.startsWith("/blog")) {
    route = Blogmenu;
  }

  const handleClickInternalLink = (e, href) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);

    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop,
        behavior: "smooth",
      });
      handleClose();
    }
  };

  useEffect(() => {
    if (ref.current === null) return;

    const handleEvent = (e) => {
      const element = ref.current;
      if (element && !element.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("pointerdown", handleEvent);

    return () => {
      document.removeEventListener("pointerdown", handleEvent);
    };
  }, [handleClose]);

  return (
    <Container
      ref={ref}
      className="bg-neutral-300 text-black dark:bg-stone-950  dark:text-white"
    >
      <nav>
        <List>
          {route.map(({ id, icon, content, to }) => (
            <DrawerItem
              key={id}
              icon={icon}
              content={content}
              onClickClose={handleClose}
              onCheckInternalLink={handleClickInternalLink}
              href={to}
            />
          ))}
        </List>
      </nav>
    </Container>
  );
}

const DrawerItem = ({
  icon,
  content,
  onClickClose,
  onCheckInternalLink,
  href,
}) => {
  const internalLink = href.startsWith("/#");
  const externalLink = href.startsWith("http");
  const slicedHref = href.slice(1);

  return (
    <Item onClick={onClickClose}>
      {internalLink ? (
        <Anchor to={href} onClick={(e) => onCheckInternalLink(e, slicedHref)}>
          {icon}
          <span>{content}</span>
        </Anchor>
      ) : (
        <Anchor to={href} target={externalLink ? "_blank" : null}>
          {icon}
          <span>{content}</span>
        </Anchor>
      )}
    </Item>
  );
};
