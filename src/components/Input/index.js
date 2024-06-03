import styled from "styled-components";

const Input = styled.input`
  /* order: 1px solid var(--blue); */
  background: transparent;
  border: 1px solid var(--blue);
  padding: 20px 140px;
  border-radius: 50px;
  width: 200px;
  color: var(--blue);
  font-size: 16px;
  margin-bottom: 10px;
  outline: none;

  &::placeholder {
    color: var(--blue);
    opacity: 80%;
    font-size: 16px;
    text-align: center;
  }
`;

export default Input;
