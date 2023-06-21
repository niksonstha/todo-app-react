import React, { useEffect, useState } from "react";
import InputField from "./todo/InputField";
import { Flex, Heading } from "@chakra-ui/react";
import TodoList from "./todo/TodoList";
import UpdateModal from "./modal/UpdateModal";

const getLocalItems = () => {
  const list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState(getLocalItems);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleInput = (value) => {
    setInputValue(value);
  };

  const addTodoItem = () => {
    if (inputValue.trim() !== "") {
      const newTodoItems = [...todoItems, inputValue];
      setTodoItems(newTodoItems);
      setInputValue("");
    }
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todoItems));
  }, [todoItems]);

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const openUpdateModal = (index) => {
    setSelectedItemIndex(index);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedItemIndex(null);
    setIsUpdateModalOpen(false);
  };

  const updateTodoItem = (updatedValue) => {
    if (selectedItemIndex !== null) {
      const updatedItems = [...todoItems];
      updatedItems[selectedItemIndex] = updatedValue;
      setTodoItems(updatedItems);
    }
  };

  return (
    <Flex
      width={["100%", "80%", "70%", "50%"]}
      maxH="-moz-max-content"
      background="#e0e0e0"
      borderRadius="20px"
      boxShadow="9px 9px 18px #929292, -9px -9px 18px #ffffff"
      padding={[0, 1, 5, 7]}
      direction="column"
    >
      <Heading textAlign="center" letterSpacing={[2, 4, 7, 10]}>
        TODO APPLICATION
      </Heading>
      <InputField onInputChange={handleInput} onAddItem={addTodoItem} />
      <TodoList
        todoItems={todoItems}
        onDeleteItem={deleteTodoItem}
        onUpdateItem={openUpdateModal}
      />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        onUpdateItem={updateTodoItem}
      />
    </Flex>
  );
}

export default Home;
