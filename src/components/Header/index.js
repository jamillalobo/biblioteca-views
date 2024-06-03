import Logo from "../Logo";
import HeaderOpcao from "../HeaderOpcao";
import HeaderIcone from "../HeaderIcone";
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: #4477ce;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  font-family: sans-serif;
  color: white;
`;

function Header() {
  return (
    <AppHeader>
      <Logo />
      <HeaderOpcao />
      <HeaderIcone />
    </AppHeader>
  );
}

export default Header;
