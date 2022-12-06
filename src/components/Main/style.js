import styled from "styled-components";

const Main = styled.main`
  animation: fade 300ms normal forwards ease-in;
  animation-iteration-count: 1;

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(20px)
    }
    to {
      transform: translateY(0)
      opacity: 1;
    }
  }
`;

export { Main };
