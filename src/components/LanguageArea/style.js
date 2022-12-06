import styled from "styled-components";

const LanguageArea = styled.div`
  display: flex;
`;

const Button = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export { LanguageArea, Button };
