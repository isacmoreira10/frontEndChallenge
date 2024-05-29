import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { SelectedProducts } from "@/pages";

import { currency } from "@/ultils/currency";

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

interface ModalProps {
  isOpen: boolean;
  products: SelectedProducts[];
  onClose: () => void;
}

export function Modal({ isOpen, products, onClose }: ModalProps) {
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={modalVariants}
            style={{
              position: "fixed",
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            <Container>
              <ProductContainer>
                <ContainerTitleButton>
                  <Title>Carrinho de compras</Title>
                  <Close onClick={onClose}>X</Close>
                </ContainerTitleButton>
                <ContainerProducts>
                  {products.map((product) => (
                    <Product key={product.id}>
                      <Image
                        src={product.photo}
                        width={80}
                        height={95}
                        alt={product.name}
                      />
                      <Name>{product.name}</Name>
                      <Quantify>
                        <Count>
                          <Minus>-</Minus>
                          <Number>{product.quantity}</Number>
                          <Plus>+</Plus>
                        </Count>
                        <Value>{currency(+product.price)}</Value>
                      </Quantify>
                    </Product>
                  ))}
                </ContainerProducts>
              </ProductContainer>
              <ValueContainer>
                <TotalValueContainer>
                  <Total>Total</Total> <TotalValue>R$798</TotalValue>
                </TotalValueContainer>
                <Finalize>Finalizar compra</Finalize>
              </ValueContainer>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
