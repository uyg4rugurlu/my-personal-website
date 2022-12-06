import styled from "styled-components";
import { Link } from "components";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavigationLink = styled(Link)`
  letter-spacing: -1px;
  font-weight: 500;
  margin-right: 2rem;
`;

export { Navigation, NavigationLink };
