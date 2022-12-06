import {useTranslation} from "next-i18next";
import {Card, ReadTime} from "components";

import * as S from "./style";
import Link from "next/link";
import Head from "next/head";

const Custom404 = ({allPosts}) => {
    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>{t("404Title")}</title>
                <meta name="description" content={t("404Description")}/>
            </Head>
            <S.Custom404>
                <S.Title>{t("notFoundTitle")}</S.Title>
                <S.Description>{t("notFoundDescription")}</S.Description>
                <S.BlogsWrapper>
                    {allPosts.map(({slug, title, readTime, date, tag}) => (
                        <Card key={slug}>
                            <Card.Image
                                image={require(`../../assets/images/post-covers/${slug}.jpeg`)}
                                key={slug}
                                href={slug}
                                alt={title}
                            />
                            <Card.Meta>
                                <Card.Info>{tag}</Card.Info>
                                <Link href={slug}>
                                    <a>
                                        <Card.Title>{title}</Card.Title>
                                    </a>
                                </Link>
                                <ReadTime date={date} readTime={readTime}/>
                            </Card.Meta>
                        </Card>
                    ))}
                </S.BlogsWrapper>
            </S.Custom404>
        </>
    );
};

export default Custom404;
