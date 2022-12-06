import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Custom404 } from "containers";
import { getAllPosts } from "lib/api";

const NotFound = ({ allPosts }) => {
  return <Custom404 allPosts={allPosts} />;
};

export async function getStaticProps({ locale }) {
  const allPosts = getAllPosts({
    fields: ["slug", "title", "shortContent", "readTime", "date"],
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      allPosts,
    },
  };
}

export default NotFound;
