import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

function InputField({ onInputChange, onAddItem }) {
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
    onInputChange(value);
  };
  const clickHandler = (e) => {
    onAddItem(input);
    console.log(input);
    setInput("");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={["column", "column", "row"]}
      alignItems={["center"]}
      gap={4}
      padding={4}
      width="100%"
      position="relative"
      mt={4}
    >
      <Box width={["100%", "90%", "70%"]}>
        <Input
          placeholder="Enter your todo"
          _placeholder={{ color: "black" }}
          focusBorderColor="black"
          borderRadius="50px"
          background="#e0e0e0"
          boxShadow="9px 9px 18px #929292,
             -9px -9px 18px #ffffff"
          padding={6}
          value={input}
          onChange={inputChangeHandler}
        />
      </Box>
      <Box>
        <Button
          borderRadius="50px"
          background="#e0e0e0"
          boxShadow="9px 9px 18px #929292,
             -9px -9px 18px #ffffff"
          padding={6}
          onClick={clickHandler}
        >
          Add Items
        </Button>
      </Box>
    </Box>
  );
}

export default InputField;
