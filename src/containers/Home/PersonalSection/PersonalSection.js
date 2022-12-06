import { Trans, useTranslation } from "next-i18next";
import { Link } from "components";

import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

import * as S from "./style";

function PersonalSection() {
  const { t } = useTranslation();

  return (
    <S.PersonalSection>
      <S.Title>{t("personalSectionTitle")}</S.Title>
      <S.PersonalText>
        <Trans i18nKey="personalSectionText">
          <b>{{ title: t("personalTextTitle") }}</b>
          <b>{{ title2: t("personalTextTitle2") }}</b>
          <Link href={`mailto:${t("personalTextEmail")}`}>
            {{ email: t("personalTextEmail") }}
          </Link>
        </Trans>
      </S.PersonalText>
      <S.SocialMediasWrapper>
        <S.SocialMedias>
          <S.SocialMediaLink
            target="_blank"
            href="https://github.com/uyg4rugurlu"
          >
            <AiOutlineGithub size={32} />
          </S.SocialMediaLink>
          <S.SocialMediaLink
            target="_blank"
            href="https://twitter.com/uuygarugurlu"
          >
            <AiOutlineTwitter size={32} />
          </S.SocialMediaLink>
          <S.SocialMediaLink
            target="_blank"
            href="https://www.instagram.com/uuygarugurlu/"
          >
            <AiOutlineInstagram size={32} />
          </S.SocialMediaLink>
        </S.SocialMedias>
      </S.SocialMediasWrapper>
    </S.PersonalSection>
  );
}

export default PersonalSection;
