import { useTranslation } from "next-i18next";
import { BiTimeFive } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";

import * as S from "./style";

const ReadTime = ({ readTime, date, ...props }) => {
  const { t } = useTranslation();

  return (
    <S.ReadTime {...props}>
      <S.Wrapper>
        <BiTimeFive />
        <p>{t("minReadTime", { minutes: readTime })}</p>
      </S.Wrapper>
      <S.Wrapper>
        <BsCalendarDate />
        <p>{date}</p>
      </S.Wrapper>
    </S.ReadTime>
  );
};

export default ReadTime;
