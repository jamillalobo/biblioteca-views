import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 40%;
`;

const OpcaoIcones = [perfil, sacola];

function HeaderIcone() {
  return (
    <Icones>
      {OpcaoIcones.map((icone) => (
        <li className="icone">
          <img src={icone} alt="icone"></img>
        </li>
      ))}
    </Icones>
  );
}

export default HeaderIcone;
