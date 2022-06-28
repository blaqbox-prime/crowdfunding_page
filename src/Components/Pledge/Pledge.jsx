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
  useMediaQuery,
} from "@chakra-ui/react";
import React, {useState} from "react";
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

  const [input,setInput] = useState('0');
  const [isSmallerThan410] = useMediaQuery('(max-width: 410px)');

  const validateAndSubmit = () => {


    const regEx = RegExp(/\d+(\.\dd)*$/);

    console.log(regEx.test(input));

    if(input.length !== 0 && Number(input) > 0){
      if(regEx.test(input)){
        submit();
        setInput('0');
        return;
      }
    }
    alert('Please enter a valid pledge amount.')

  }

  return (
    <Card py={6} opacity={radioValue !== '0' ? amountLeft > 0 ? 1 : .5 : 1}>
      <Flex direction={"row"} mt={3}>
        <Box mt={2}>
          <Radio size={isSmallerThan410 ? 'md' : "lg"} value={radioValue} disabled={radioValue !== '0' ? amountLeft > 0 ? false : true : false}/>
        </Box>
        <Box ml={2}>
          {/* Header */}
          <Flex alignItems={"center"} justifyContent={!isSmallerThan410 && "space-between"}
          direction={isSmallerThan410 && 'column'}
          >
            <Stack direction={isSmallerThan410 ? 'column' :"row"}  alignItems={isSmallerThan410 ? 'flex-start' :'center'}>
              <Heading fontSize={isSmallerThan410 ? 'md' : "lg"}
              _hover={{
                  cursor: "pointer",
                  color: Colors.brand.moderate_cyan
              }}
              >{title}</Heading>
              { pledgeMin && <Text color={Colors.brand.moderate_cyan} fontSize={isSmallerThan410 && 'sm'} >{pledgeMin}</Text>}
            </Stack>
            {/* Amount Left */}
            {!isSmallerThan410 && <>{  amountLeft && <Box>
              <Stat>
                <Flex>
                  <StatNumber>{amountLeft}</StatNumber>
                  <StatHelpText ml={2}>Left</StatHelpText>
                </Flex>
              </Stat>
            </Box>
            }</>
            }
          </Flex>
          {/* Description */}
          <Text fontSize={isSmallerThan410 && 'sm'} textAlign={"left"} color={Colors.brand.dark_gray}>
            {description}
          </Text>
          {/* DESKTOP VIEW FOR AMOUNT LEFT */}
          {isSmallerThan410 && <>{  amountLeft && <Box>
              <Stat>
                <Flex>
                  <StatNumber>{amountLeft}</StatNumber>
                  <StatHelpText ml={2}>Left</StatHelpText>
                </Flex>
              </Stat>
            </Box>
            }</>
            }
        </Box>
      </Flex>
      {selected && (
        <>
          <Divider my={5} />
          <Flex alignItems={"center"} justifyContent={"space-between"}
          direction={isSmallerThan410 && 'column'}
          >
            <Text className="enterPledgePrompt" color={Colors.brand.dark_gray}
            fontSize={isSmallerThan410 && 'sm'}
            mb={isSmallerThan410 && 3}
            >
              Enter your pledge
            </Text>
            {/*  */}
            <Flex>
            <Flex
             height={45}
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
              <PrimaryButton text={"Continue"} onClick={() => validateAndSubmit()}/>
            </Flex>
          </Flex>
        </>
      )}
    </Card>
  );
}

export default Pledge;
