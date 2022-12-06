import styled from "styled-components";

const Custom404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
`;

const Description = styled.p`
`;

const BlogsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export {Custom404, Title, Description, BlogsWrapper};
