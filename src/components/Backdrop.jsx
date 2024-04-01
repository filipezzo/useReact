import styled from "styled-components";

const BackDrop = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 50%;
`;

export function Backdrop() {
  return <BackDrop />;
}
