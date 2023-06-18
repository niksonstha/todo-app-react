import { Flex } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Home />
    </Flex>
  );
}

export default App;
