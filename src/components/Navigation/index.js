import { useRouter } from "next/router";

import { LanguageArea } from "components";

import * as C from "./constants";
import * as S from "./style";

function Navigation() {
  const router = useRouter();

  return (
    <S.Navigation>
      {/* {C.NavigationMenu.map(({ key, title, pathname }) => (
        <S.NavigationLink
          key={key}
          href={pathname}
          // TODO: make fancy effects on isActive like shining
          isActive={router.pathname === pathname}
        >
          {title}
        </S.NavigationLink>
      ))} */}
      <LanguageArea />
    </S.Navigation>
  );
}

Navigation.S = S;
export default Navigation;
