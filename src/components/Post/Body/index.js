import * as S from "./style";

const PostBody = ({ content, shortContent }) => {
  return (
    <S.PostBody>
      <S.ShortDescription>{shortContent}</S.ShortDescription>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.PostBody>
  );
};

export default PostBody;
