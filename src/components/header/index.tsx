import Image from "next/image";
import {
  CountContainer,
  HeaderContainer,
  TitlePage,
  TitlePageSpan,
} from "./styles";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOPen] = useState(false);
  return (
    <HeaderContainer>
      <TitlePage>
        MKS <TitlePageSpan>Sistemas</TitlePageSpan>
      </TitlePage>
    </HeaderContainer>
  );
}
