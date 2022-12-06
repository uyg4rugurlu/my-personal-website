import { useTranslation } from "next-i18next";
import { Card, Link, ReadTime } from "components";

import * as S from "./style";

function BlogsSection({ posts }) {
  const { t } = useTranslation();

  return (
    <S.BlogsSection title={t("blogsSectionTitle")}>
      {posts.map(({ slug, title, readTime, date, tag }, index) => (
        <Card key={slug} direction={index === 0 ? "vertical" : "horizontal"}>
          <Card.Image
            image={require(`../../../assets/images/post-covers/${slug}.jpeg`)}
            href={slug}
            as={Link}
            alt={title}
          />
          <Card.Meta>
            <Card.Info>{tag}</Card.Info>
            <Card.Title as={Link} href={slug}>
              {title}
            </Card.Title>
            <ReadTime date={date} readTime={readTime} />
          </Card.Meta>
        </Card>
      ))}
    </S.BlogsSection>
  );
}

export default BlogsSection;
