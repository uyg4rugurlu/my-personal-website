import { appWithTranslation } from "next-i18next";

import "styles.css";
import "containers/Post/atom-one-dark.css";

import { SeoHead } from "components";
import { MainLayout } from "layouts";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <SeoHead />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default appWithTranslation(App);
