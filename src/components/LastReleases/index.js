import { livros } from "./dataLastReleases";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecommendation";
import imagemLivro from "../../assets/livro.png";
import styled from "styled-components";

const LastReleasesContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: #35155d;
`;

const NewBooksContainer = styled.div``;

function LastRealeses() {
  return (
    <LastReleasesContainer>
      <Titulo tamanhoFonte={"36px"}>Last Realeses</Titulo>
      <NewBooksContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="book" />
        ))}
      </NewBooksContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </LastReleasesContainer>
  );
}

export default LastRealeses;
