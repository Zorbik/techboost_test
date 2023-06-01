import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./Header";
import { Container } from "@chakra-ui/react";

export const Layout = () => {
  return (
    <>
      <Container
        maxW={"1536px"}
        padding={{ base: "0 20px", lg: "0 32px", xl: "0 16px" }}
      >
        <Header />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
