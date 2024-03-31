import { Link } from "react-router-dom";
import bg from "../../../assets/react.png";
export function Banner() {
  const inlineStyle = {
    backgroundImage: `url(${bg})`,
    padding: "370px 16px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    filter: "saturate(2.2)",
  };

  const headingStyle = {
    position: "absolute",
    top: "5rem",
    fontWeight: "600",
    color: "#0ea5e9",
    fontSize: "34px",
    textAlign: "center",
    lineHeight: "1.235",
  };

  const btnStyle = {
    position: "absolute",
    top: "40rem",
    border: "1px solid #0ea5e9",
    borderRadius: "8px",
    borderWidth: "3px",
    fontWeight: "600",
    padding: "5px 15px",
    color: "#0ea5e9",
    textTransform: "uppercase",
    fontSize: "1.25rem",
    lineHeight: "1.6",
    minWidth: "246px",
    textAlign: "center",
  };
  return (
    <section id="sobre" className="border-b border-t">
      <div style={inlineStyle}>
        <h2 style={headingStyle}>Onde aprender React? 🤔</h2>
        <Link
          className="hover:scale-105"
          to="https://react.dev/learn"
          target="_blank"
          style={btnStyle}
        >
          Descobra Agora
        </Link>
      </div>
    </section>
  );
}
