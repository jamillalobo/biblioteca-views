import styled from "styled-components";

const Sections = styled.ul`
  list-style: none;
  display: flex;
  gap: 70px;
  margin: 0 10%;
`;

const OpcoesTexto = ["Categorias", "Minha Estante", "Favoritos"];

function HeaderOpcao() {
  return (
    <Sections>
      {OpcoesTexto.map((texto) => (
        <li className="section">
          <p>{texto}</p>
        </li>
      ))}
    </Sections>
  );
}

export default HeaderOpcao;
