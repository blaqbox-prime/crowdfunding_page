import {
  Modal,
  ModalBody,
  RadioGroup,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Colors } from "../../Colors";
import Pledge from "../Pledge/Pledge";
import ThanksModal from "../ThanksModal/ThanksModal";

function BackProjectModal({ isOpen, onClose }) {
  const [radioValue, setRadioValue] = useState("0");
  const successDisclosure = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          boxShadow="lg"
          px={8}
          textAlign={"left"}
          backgroundColor={"white"}
          maxW="700px"
        >
          <ModalHeader pl={0} pb={3}>
            Back this project
          </ModalHeader>
          <Text color={Colors.brand.dark_gray} fontSize={"smaller"} mb={5}>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={setRadioValue} value={radioValue}>
            <Pledge
                title={"Pledge with no reward"}
                description={
                  "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
                }
                radioValue={"0"}
                selected={radioValue === "0"}
                submit={successDisclosure.onOpen}
              />
              <Pledge
                title={"Bamboo Stand"}
                pledgeMin={"Pledge $25 or more"}
                amountLeft={"202"}
                description={
                  "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                }
                radioValue={"1"}
                selected={radioValue === "1"}
                submit={successDisclosure.onOpen}
              />

              <Pledge
                title={"Black Edition Stand"}
                pledgeMin={"$75 plegde or more"}
                amountLeft={"64"}
                description={
                  "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                }
                radioValue={"2"}
                selected={radioValue === "2"}
                submit={successDisclosure.onOpen}
              />

              <Pledge
                title={"Mahogany Special Edition"}
                pledgeMin={"$200 plegde or more"}
                amountLeft={"0"}
                description={
                  "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                }
                radioValue={"3"}
                selected={radioValue === "3"}
              />
            </RadioGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ThanksModal isOpen={successDisclosure.isOpen} onClose={successDisclosure.onClose}/>
    </>
  );
}

export default BackProjectModal;
