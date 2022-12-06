import {Logo, Navigation} from "components";

import * as S from "./style";

const Header = () => {
    return (
        <S.Header>
            <Logo/>
            <Navigation/>
        </S.Header>
    );
};

export default Header;
