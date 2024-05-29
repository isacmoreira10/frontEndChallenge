import { Products } from "../../pages";
import { Card } from "../card";
import { Modal } from "../modal";
import { Container } from "./styles";

interface ProductsProps {
  products: Products[];
  onSelectedProdut: (product: Products) => void;
}

export function ProductsWrapper({ products, onSelectedProdut }: ProductsProps) {
  return (
    <Container>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          onSelectedProducts={(product) => onSelectedProdut(product)}
        />
      ))}
    </Container>
  );
}
