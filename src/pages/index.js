import Head from "next/head";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {HomeContainer} from "containers";

import {getPostSlugs, getPostBySlug} from "lib/api";

const HomePage = ({allPosts}) => {
    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>Uygar Uğurlu | Self Taught Full Stack Web Developer</title>
            </Head>
            <HomeContainer posts={allPosts}/>
        </>
    );
};

export async function getStaticProps({locale}) {
    const allPostsSlugs = getPostSlugs();
    const allPosts = allPostsSlugs.map((slug) =>
        getPostBySlug({
            slug,
            fields: ["slug", "title", "shortContent", "readTime", "date", "tag"],
            language: locale,
        })
    );

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            allPosts,
        },
    };
}

export default HomePage;
