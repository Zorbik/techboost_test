import { Heading } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <>
      <Heading
        as="h1"
        size={"4xl"}
        variant={"homePageHeading"}
        width={{ base: "100%", lg: "50%" }}
      >
        Welcome to the future`s Twitter
      </Heading>
    </>
  );
};
