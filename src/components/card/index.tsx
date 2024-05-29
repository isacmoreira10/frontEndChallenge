import Image from "next/image";

import { Products } from "../../pages";
import {
  Button,
  CardContainer,
  ContainerDescription,
  Description,
  ImageContainer,
  Name,
  NamePrice,
  Price,
} from "./styles";
import { useState } from "react";

interface CardProps {
  product: Products;
  onSelectedProducts: (product: Products) => void;
}

export function Card({ product, onSelectedProducts }: CardProps) {
  return (
    <CardContainer>
      <ContainerDescription>
        <ImageContainer>
          <Image
            src={product.photo}
            width={127}
            height={158}
            alt="apple-watch"
            className="ImageProduct"
          />
        </ImageContainer>
        <NamePrice>
          <Name>{product.name}</Name>
          <Price>R$ {product.price}</Price>
        </NamePrice>
        <Description>{product.description}</Description>
      </ContainerDescription>
      <Button onClick={() => onSelectedProducts(product)}>
        <Image
          src="/shopping-bag.svg"
          width={20}
          height={20}
          alt="icon-bag"
        ></Image>
        <span>comprar</span>
      </Button>
    </CardContainer>
  );
}
