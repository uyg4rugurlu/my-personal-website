import styled from "styled-components";
import {Link} from "components";

import Section from "../Section";

const PersonalSection = styled(Section)``;

const PersonalText = styled.p`
  font-size: 1.5rem;
`;

const SocialMediasWrapper = styled.div``;

const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const SocialMediaLink = styled(Link)`
  color: var(--white-200);
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #9c80ff 0%, #ed19e3 100%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
`;

export {
    PersonalSection,
    PersonalText,
    SocialMediasWrapper,
    SocialMedias,
    SocialMediaLink,
    Title
};
