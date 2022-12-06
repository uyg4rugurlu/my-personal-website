import styled from "styled-components";

import {Link} from "components";

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -2px;
  text-decoration: none;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Wave = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

const AnimatedWave = styled(Wave)`
  animation: wave 1s infinite;
  display: inline-block;
  transform-origin: 70% 70%;
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-25deg);
    }
    20% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(25deg);
    }
    40% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export {Logo, Wave, AnimatedWave, Div};
