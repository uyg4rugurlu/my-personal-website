import Head from "next/head";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const SchemaInfo = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Uygar Uğurlu",
    "jobTitle": "Software Engineer",
    "url": "https://www.uygar.xyz",
    "sameAs": ["https://twitter.com/uuygarugurlu", "https://github.com/uyg4rugurlu", "https://www.instagram.com/uuygarugurlu/"]
};

const SeoHead = ({title}) => {
    const {t} = useTranslation();
    const router = useRouter();

    return (
        <Head>
            <meta name="robots" content="index, follow"/>
            <meta content="index, follow" name="robots"/>
            <meta content="index, follow" name="GOOGLEBOT"/>
            <meta content="index, follow" name="yahooBOT"/>
            <meta content="index, follow" name="yandexBOT"/>

            <meta name="description" content={t("metaDescription")}/>
            <meta name="author" content="Uygar Uğurlu"/>
            <meta name="email" content="uuygarugurlu@icloud.com"/>

            <link
                rel="conanical"
                href={`https://uygar.xyz${
                    router.locale === router.defaultLocale
                        ? router.asPath
                        : `/${router.locale}${router.asPath}`
                }`}
            />

            <meta property="og:title" content="Uygar Uğurlu"/>
            <meta property="og:description" content={t("metaDescription")}/>
            <meta property="og:type" content="website"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content="@uuygarugurlu"/>
            <meta name="twitter:title" content="Uygar Uğurlu"/>
            <meta name="twitter:description" content={t("metaDescription")}/>
            <meta
                name="twitter:image"
                content="https://www.uygar.xyz/images/me.jpeg"
            />

            <script type="application/ld+json">
                {JSON.stringify(SchemaInfo)}
            </script>

            <link rel="icon" href="/images/favicon.ico"/>

            {title && <title>{title}</title>}
        </Head>
    );
};

export default SeoHead;
