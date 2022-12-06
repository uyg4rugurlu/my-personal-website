import * as S from "./style";

const Logo = ({...props}) => {
    return (
        <S.Div>
            <S.Logo href="/" {...props}>
                uygar.xyz
            </S.Logo>
            <S.AnimatedWave>👋</S.AnimatedWave>
        </S.Div>
    );
};

export default Logo;
