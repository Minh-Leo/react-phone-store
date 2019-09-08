import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  border-radius: 5px;
  border: 0.5px solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  font-size: 1.2rem;
  background: var(--mainWhite);
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
