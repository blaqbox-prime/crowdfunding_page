import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  Radio,
  Stack,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../Colors";
import Card from "../Card/Card";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Pledge({
  radioValue,
  selected,
  title,
  description,
  pledgeMin,
  amountLeft,
  withReward = true,
  submit
}) {
  return (
    <Card py={6} opacity={radioValue !== '0' ? amountLeft > 0 ? 1 : .5 : 1}>
      <Flex direction={"row"} mt={3}>
        <Box mt={2}>
          <Radio size={"lg"} value={radioValue} />
        </Box>
        <Box ml={2}>
          {/* Header */}
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction="row"  alignItems={'center'}>
              <Heading fontSize={"lg"}
              _hover={{
                  cursor: "pointer",
                  color: Colors.brand.moderate_cyan
              }}
              >{title}</Heading>
              { pledgeMin && <Text color={Colors.brand.moderate_cyan}>{pledgeMin}</Text>}
            </Stack>
            {/* Amount Left */}
            {amountLeft && <Box>
              <Stat>
                <Flex>
                  <StatNumber>{amountLeft}</StatNumber>
                  <StatHelpText ml={2}>Left</StatHelpText>
                </Flex>
              </Stat>
            </Box>}
          </Flex>
          {/* Description */}
          <Text textAlign={"left"} color={Colors.brand.dark_gray}>
            {description}
          </Text>
        </Box>
      </Flex>
      {selected && (
        <>
          <Divider my={5} />
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text className="enterPledgePrompt" color={Colors.brand.dark_gray}>
              Enter your pledge
            </Text>
            {/*  */}
            <Flex>
            <Flex
             height={50}
             width={"100px"}
             px={4}
             py={3}
             rounded={"3xl"}
             backgroundColor={"white"}
             alignItems="center"
             border={"1px solid " + Colors.brand.moderate_cyan}
            mr={3}
            _focus={
              {borderColor: Colors.brand.moderate_cyan}
            }
            >
              <Text color={Colors.brand.dark_gray}>
                $
              </Text>
              <Input
              border={'none'}
              textAlign={'center'}
              fontWeight={'bold'}
              fontSize={16}
                p={'0'}
                ml='5px'
                type="number"
                _focus={{
                  border:"none",
                }}
              />
            </Flex>
              <PrimaryButton text={"Continue"} onClick={() => submit()}/>
            </Flex>
          </Flex>
        </>
      )}
    </Card>
  );
}

export default Pledge;
