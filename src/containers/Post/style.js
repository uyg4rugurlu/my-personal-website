import styled from "styled-components";

const PostContainer = styled.div`
  @media (min-width: 568px) {
    max-width: 65ch;
    margin-left: auto;
    margin-right: auto;
  }

  & > :nth-child(2) {
    h1,
    h2,
    i,
    a {
      text-rendering: optimizeLegibility;
    }

    li {
      margin-left: 0.5rem;
      padding-left: 0.25rem;
    }

    li::marker {
      content: "-";
    }

    h1 {
      text-align: center;
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      padding: 0;
      margin-top: 2rem;
      letter-spacing: -0.45px;
    }

    p,
    i,
    a,
    pre,
    blockquote,
    li {
      margin-top: 1.5rem;
    }

    p,
    i,
    a,
    li,
    pre,
    code {
      font-size: 1.25rem;
    }

    strong {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }

    blockquote {
      font-size: 0.75rem;
      font-style: italic;
      letter-spacing: -0.36px;
      padding-left: 1rem;
      border-left: 1px solid var(--gray-400);
    }

    pre code {
      display: block;
    }

    code {
      background-color: rgba(0, 0, 0);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 0.5rem;
      overflow-x: auto;
      font-size: 1rem;
    }
  }
`;

export { PostContainer };
