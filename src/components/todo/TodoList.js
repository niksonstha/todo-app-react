import { Box, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function TodoList({ todoItems, onDeleteItem, onUpdateItem }) {
  const handleDeleteItem = (index) => {
    onDeleteItem(index);
  };

  const handleUpdate = (index) => {
    onUpdateItem(index);
  };

  return (
    <Box padding={6} mt={7} display="flex" flexDirection="column" gap={5}>
      {todoItems.map((todo, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          borderRadius={["3px", "10px", "20px"]}
          background="#e0e0e0"
          boxShadow="9px 9px 18px #929292, -9px -9px 18px #ffffff"
          padding={3}
        >
          <Text fontSize={["0.7rem", "1.1rem"]} fontWeight="bold">
            {todo}
          </Text>
          <Spacer />
          <Box display="flex" alignItems="center" gap={5}>
            <FaEdit
              size={25}
              color="green"
              cursor="pointer"
              onClick={() => handleUpdate(index)}
            />
            <FaTrashAlt
              size={20}
              color="red"
              cursor="pointer"
              onClick={() => handleDeleteItem(index)}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default TodoList;
