import { Header, Main, Footer } from "components";

import * as S from "./style";

const MainLayout = ({ children }) => {
  return (
    <S.MainLayout>
      <Header />
      <Main key={Math.random()}>{children}</Main>
      <Footer />
    </S.MainLayout>
  );
};

export default MainLayout;
