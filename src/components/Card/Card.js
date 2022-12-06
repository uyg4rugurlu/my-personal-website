import Image from "next/image";

import * as S from "./style";

const Title = ({children, ...props}) => (
    <S.Title {...props}>{children}</S.Title>
);

const Info = ({children}) => <S.Info>{children}</S.Info>;

const CardImage = ({image, alt, ...props}) => (
    <S.ImageWrapper {...props}>
        <Image src={image} alt={alt || "Image"}/>
    </S.ImageWrapper>
);

const Meta = ({children}) => <S.MetaWrapper>{children}</S.MetaWrapper>;

const Card = ({direction = "horizontal", children, ...props}) => {
    return (
        <S.Card direction={direction} {...props}>
            {children}
        </S.Card>
    );
};

Card.Meta = Meta;
Card.Info = Info;
Card.Title = Title;
Card.Image = CardImage;

Card.S = S;
export default Card;
