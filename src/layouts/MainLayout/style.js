import styled from "styled-components";

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr min(1024px, 90%) 1fr;
  grid-template-rows: 72px minmax(calc(100vh - 144px - 6rem), auto) 72px;
  grid-row-gap: 2rem;

  & > * {
    grid-column: 2;
  }
`;

export { MainLayout };
