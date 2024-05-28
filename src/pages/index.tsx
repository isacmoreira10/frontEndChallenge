import { GetServerSideProps } from "next";
import Head from "next/head";

import { ProductsWrapper } from "@/components/products-wrapper";
import { Header } from "@/components/header";
import { Container } from "./styles";
import { Footer } from "@/components/footer/intex";
import { Modal } from "@/components/modal";

export interface Products {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
}

export default function Home(props: { products: Products[] }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      <Header />
      <Container>
        <ProductsWrapper products={props.products} />
      </Container>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );
  const productsResult = await result.json();

  return {
    props: {
      products: productsResult.products,
    },
  };
};

// SSR - SERVER SIDE Rendering

// SSG - STATIC SITE GENERATION

// cient
// tela é carregada -> vai fazer a requisição -> inserir na tela

// server
// fazer a requisição -> montar nossa tela
