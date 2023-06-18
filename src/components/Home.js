import React from "react";
import InputField from "./todo/InputField";
import { Flex, Heading } from "@chakra-ui/react";
import TodoList from "./todo/TodoList";

function Home() {
  return (
    <Flex
      width={["100%", "80%", "70%", "50%"]}
      h="70vh"
      background="#e0e0e0"
      borderRadius="20px"
      boxShadow="9px 9px 18px #929292,
       -9px -9px 18px #ffffff"
      padding={[0, 1, 5, 7]}
      direction="column"
    >
      <Heading textAlign="center" letterSpacing={[2, 4, 7, 10]}>
        TODO APPLICATION
      </Heading>
      <InputField />
      <TodoList />
    </Flex>
  );
}

export default Home;
