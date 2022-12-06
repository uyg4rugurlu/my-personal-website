import styled from "styled-components";

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SectionTitleShadow = styled.h2`
  position: absolute;
  white-space: nowrap;
  filter: blur(2px);
  top: -1.5rem;
  left: -2rem;
  font-size: 5rem;
  opacity: 0.1;
  font-weight: 700;
`;

const SectionWrapper = styled.div``;

export {
  Section,
  TitleWrapper,
  SectionTitle,
  SectionWrapper,
  SectionTitleShadow,
};
