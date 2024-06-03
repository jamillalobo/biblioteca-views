import styled from "styled-components";
import Header from "./components/Header";
import Search from "./components/Pesquisa";
import LastRealeses from "./components/LastReleases";

const AppStyle = styled.div`
  width: 100vw;
  height: auto;
  background-color: var(--dark-purple);
`;

function App() {
  return (
    <AppStyle>
      <Header />
      <Search />
      <LastRealeses />
    </AppStyle>
  );
}

export default App;
