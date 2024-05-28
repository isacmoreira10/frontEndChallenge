import { Products } from "../../pages/";
import { Card } from "../card";
import { Container } from "./styles";

interface ProductsProps {
  products: Products[];
}

export function ProductsWrapper({ products }: ProductsProps) {
  return (
    <Container>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Container>
  );
}
