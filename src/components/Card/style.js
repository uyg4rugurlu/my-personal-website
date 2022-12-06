import styled, { css } from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  img {
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  letter-spacing: -1.5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.75rem;
  overflow: hidden;
  text-decoration: none;
`;

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaChildren = styled.div`
  margin-top: 0.5rem;
`;

const Card = styled.article`
  display: flex;
  text-decoration: none;

  a:hover {
    color: var(--white-200);
  }

  ${({ direction }) =>
    direction === "vertical"
      ? css`
          flex-direction: column;

          ${MetaWrapper} {
            margin-top: 1rem;
          }
        `
      : css`
          ${ImageWrapper} {
            margin-right: 1rem;
            width: 30%;
            flex-shrink: 0;
          }
        `}
`;

const Info = styled.div`
  display: inline-block;
  text-transform: uppercase;
  color: var(--primary);
  font-size: 1rem;
`;

export { Card, Title, MetaWrapper, ImageWrapper, MetaChildren, Info };
