import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Close,
  Container,
  ContainerProducts,
  ContainerTitleButton,
  Count,
  CountContainer,
  Finalize,
  Minus,
  Name,
  Number,
  Plus,
  Product,
  ProductContainer,
  Quantify,
  Title,
  Total,
  TotalValue,
  TotalValueContainer,
  Value,
  ValueContainer,
} from "./styles";

const modalVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export function Modal() {
  const [isOpen, setIsOPen] = useState(false);
  return (
    <div>
      {!isOpen && (
        <CountContainer onClick={() => setIsOPen(true)}>
          <Image
            src="Vector.svg"
            width={15}
            height={15}
            alt="shopping bag"
          ></Image>
          <span>0</span>
        </CountContainer>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={modalVariants}
          >
            <Container>
              <ProductContainer>
                <ContainerTitleButton>
                  <Title>Carrinho de compras</Title>
                  <Close onClick={() => setIsOPen(false)}>X</Close>
                </ContainerTitleButton>
                <ContainerProducts>
                  <Product>
                    <Image
                      src="apple-watch.svg"
                      width={80}
                      height={95}
                      alt="apple-watch"
                    />
                    <Name></Name>
                    <Quantify>
                      <Count>
                        <Minus>-</Minus>
                        <Number>1</Number>
                        <Plus>+</Plus>
                      </Count>
                      <Value>R$ 399</Value>
                    </Quantify>
                  </Product>
                  <Product>
                    <Image
                      src="apple-watch.svg"
                      width={80}
                      height={95}
                      alt="apple-watch"
                    />
                    <Name>Apple Watch Series</Name>
                    <Quantify>
                      <Count>
                        <Minus>-</Minus>
                        <Number>1</Number>
                        <Plus>+</Plus>
                      </Count>
                      <Value>R$399</Value>
                    </Quantify>
                  </Product>
                </ContainerProducts>
              </ProductContainer>
              <ValueContainer>
                <TotalValueContainer>
                  <Total>Total</Total> <TotalValue>R$798</TotalValue>
                </TotalValueContainer>
                <Finalize>FInalizar compra</Finalize>
              </ValueContainer>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
