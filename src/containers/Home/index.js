import PersonalSection from "./PersonalSection";
import BlogsSection from "./BlogsSection";

import * as S from "./style";

const HomeContainer = ({ posts }) => {
  return (
    <S.HomeContainer>
      <PersonalSection />
      <BlogsSection posts={posts} />
    </S.HomeContainer>
  );
};

export default HomeContainer;
