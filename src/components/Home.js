import React, { useState } from "react";
import InputField from "./todo/InputField";
import { Flex, Heading } from "@chakra-ui/react";
import TodoList from "./todo/TodoList";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleInput = (value) => {
    setInputValue(value);
  };
  const addTodoItem = () => {
    if (inputValue.trim() !== "") {
      setTodoItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
  };
  return (
    <Flex
      width={["100%", "80%", "70%", "50%"]}
      maxH="-moz-max-content"
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
      <InputField onInputChange={handleInput} onAddItem={addTodoItem} />
      <TodoList todoItems={todoItems} />
    </Flex>
  );
}

export default Home;
