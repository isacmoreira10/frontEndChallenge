import Image from "next/image";

import { Products } from "../../pages/";
import {
  Button,
  CardContainer,
  ContainerDescription,
  Description,
  Name,
  NamePrice,
  Price,
} from "./styles";
import { useState } from "react";

interface CardProps {
  product: Products;
}

export function Card({ product }: CardProps) {
  const [products, setProducts] = useState<Products>();
  console.log(products);
  return (
    <CardContainer>
      <ContainerDescription>
        <Image src={product.photo} width={127} height={158} alt="apple-watch" />
        <NamePrice>
          <Name>{product.name}</Name>
          <Price>R$ {product.price}</Price>
        </NamePrice>
        <Description>{product.description}</Description>
      </ContainerDescription>
      <Button onClick={() => setProducts(product)}>
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
