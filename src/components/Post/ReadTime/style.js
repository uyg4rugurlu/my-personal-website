import styled from "styled-components";

const ReadTime = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--white-200);

  &:not(:last-of-type) {
    margin-right: 2rem;
  }

  p {
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

export { ReadTime, Wrapper };
