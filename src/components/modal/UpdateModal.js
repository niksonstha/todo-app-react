import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function UpdateModal({ isOpen, onClose, onUpdateItem }) {
  const [updatedValue, setUpdatedValue] = useState("");

  const handleInputChange = (e) => {
    setUpdatedValue(e.target.value);
  };

  const handleSubmit = () => {
    onUpdateItem(updatedValue);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Enter updated value"
            value={updatedValue}
            onChange={handleInputChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Update
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UpdateModal;
