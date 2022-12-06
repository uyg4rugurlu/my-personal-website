import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PostContainer } from "containers";

import { getAllPosts, getPostBySlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";

const PostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="keywords" content={post.keywords} />
        <meta name="description" content={post.metaDescription} />
      </Head>
      <PostContainer post={post} />
    </>
  );
};

export async function getStaticProps({ locale, params }) {
  const post = getPostBySlug({
    slug: params.slug,
    fields: [
      "title",
      "date",
      "readTime",
      "slug",
      "content",
      "shortContent",
      "keywords",
      "metaDescription",
      "tag",
    ],
    language: locale,
  });

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths({ locales }) {
  const posts = getAllPosts({ fields: ["slug"] });
  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...posts.map(({ slug }) => ({ params: { slug }, locale })),
    ],
    []
  );

  return {
    paths,
    fallback: false,
  };
}

export default PostPage;
