import * as S from "./style";

function Section({ title, children, ...props }) {
  return (
    <S.Section key={title}>
      <S.TitleWrapper>
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.SectionTitleShadow>{title}</S.SectionTitleShadow>
      </S.TitleWrapper>
      <S.SectionWrapper {...props}>{children}</S.SectionWrapper>
    </S.Section>
  );
}

Section.S = S;
export default Section;
