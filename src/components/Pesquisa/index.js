import { useState } from "react";
import Input from "../Input";
import styled from "styled-components";
import { livros } from "./dadosPesquisa";
import { Titulo } from "../Titulo";

const PesquisaContainer = styled.section`
  color: var(--white);
  text-align: center;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const ListaResultado = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
`;

const Resultado = styled.div`
  width: 30%;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid var(--white);
  }
`;

function Search() {
  const [pesquisaDigitada, setPesquisaDigitada] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo tamanhoFonte={"36px"}>Deseja procurar um livro?</Titulo>
      <Subtitulo>Digite o nome do livro abaixo:</Subtitulo>
      <Input
        placeholder="Escreva aqui"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setPesquisaDigitada(resultadoPesquisa);
        }}
      />
      <ListaResultado>
        {pesquisaDigitada.map((livro) => (
          <Resultado>
            <p>{livro.nome}</p>
            <img src={livro.src} alt="livro"></img>
          </Resultado>
        ))}
      </ListaResultado>
    </PesquisaContainer>
  );
}

export default Search;
