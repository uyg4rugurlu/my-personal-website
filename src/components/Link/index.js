import NextLink from "next/link";

import * as S from "./style";

const Link = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref {...props}>
      <S.Link {...props}>{children}</S.Link>
    </NextLink>
  );
};

Link.S = S;
export default Link;
