import { useState } from "react";
import Image from "next/image";

import { SelectedProducts } from "@/pages";

import { Modal } from "../modal";

import {
  CountContainer,
  HeaderContainer,
  TitlePage,
  TitlePageSpan,
} from "./styles";

interface HeaderProps {
  products: SelectedProducts[];
}

export function Header({ products }: HeaderProps) {
  const [isOpen, setIsOPen] = useState(false);

  return (
    <HeaderContainer>
      <TitlePage>
        MKS <TitlePageSpan>Sistemas</TitlePageSpan>
      </TitlePage>

      <CountContainer onClick={() => setIsOPen(true)}>
        <Image
          src="Vector.svg"
          width={15}
          height={15}
          alt="shopping bag"
        ></Image>
        <span>{products.length}</span>
      </CountContainer>

      <Modal
        products={products}
        isOpen={isOpen}
        onClose={() => setIsOPen(false)}
      />
    </HeaderContainer>
  );
}
