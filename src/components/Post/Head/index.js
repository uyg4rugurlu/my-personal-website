import { ReadTime } from "components";

import * as S from "./style";

const PostHead = ({ title, readTime, date }) => {
  return (
    <S.PostHead>
      <S.Title>{title}</S.Title>
      <ReadTime readTime={readTime} date={date} />
    </S.PostHead>
  );
};

export default PostHead;
