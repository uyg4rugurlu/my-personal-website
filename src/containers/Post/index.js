import { PostBody, PostHead } from "components";

import * as S from "./style";

const PostContainer = ({ post }) => {
  const { shortContent, content, title, readTime, date } = post;

  return (
    <S.PostContainer>
      <PostHead title={title} readTime={readTime} date={date} />
      <PostBody shortContent={shortContent} content={content} />
    </S.PostContainer>
  );
};

export default PostContainer;
