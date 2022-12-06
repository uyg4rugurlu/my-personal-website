import styled from "styled-components";

import { Card } from "components";

import Section from "../Section";

const BlogsSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 150px;
  grid-gap: 1.5rem;

  & > *:first-of-type {
    grid-column: 1;
    grid-row: 1 / 4;

    ${Card.S.Title} {
      font-size: 3rem;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const InfoText = styled.p`
  display: inline;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--primary);
  font-size: 1rem;
`;

export { BlogsSection, InfoText };
