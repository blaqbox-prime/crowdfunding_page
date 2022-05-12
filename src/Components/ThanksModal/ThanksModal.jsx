import {
  Box,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../Colors";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function ThanksModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        boxShadow={"lg"}
        textAlign={"center"}
        px={6}
        background={"white"}
      >
        <ModalBody>
          <Image
            src="/images/icon-check.svg"
            mb={"9"}
            mt={"8"}
            display="block"
            align={"center"}
            mx="auto"
          />
          <Heading fontSize="20">Thanks for your support</Heading>
          <Text my={3} lineHeight={1.5} color={Colors.brand.dark_gray}>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </Text>
          <Box mt={"5"} mb={4}>
            
            <PrimaryButton text={"Got it!"} onClick={onClose} />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ThanksModal;
