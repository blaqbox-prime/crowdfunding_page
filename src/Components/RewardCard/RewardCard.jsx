import { Flex, Heading, Stat, StatHelpText, StatNumber, Text, useMediaQuery } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import Card from '../Card/Card'
import {Colors} from '../../Colors';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function RewardCard({title, pledge, description, amountLeft}) {
    const [isActive, setIsActive] = useState(true);
    const [isSmallerThan410] = useMediaQuery('(max-width: 410px)');

    useEffect(() => {
      if(amountLeft <= 0) setIsActive(false);
    }, [amountLeft])
    
  return (
    <Card opacity={!isActive ? 0.5 : 1}>
        <Flex alignItems={isSmallerThan410 ? 'start' :'center'} justifyContent={'space-between'} mb={6}
        direction={isSmallerThan410 && 'column'}
        >

            <Heading size={isSmallerThan410 ? 'sm' : "md"} text-align="left">{title}</Heading>
            <Text color={Colors.brand.moderate_cyan}>
                {pledge}
            </Text>
        </Flex>
        <Text textAlign={'left'} color={Colors.brand.dark_gray} lineHeight={2} mb={6} 
        fontSize={isSmallerThan410 && 'sm'}
        >
        {description}
        </Text>

        <Flex alignItems={isSmallerThan410 ? 'start' : 'center'} justifyContent={'space-between'}
        direction={isSmallerThan410 && 'column'}
        >
            <Stat>
                <Flex alignItems={'center'}>
                    <StatNumber>{amountLeft}</StatNumber>
                    <StatHelpText ml={2} mt={2}>Left</StatHelpText>
                </Flex>
            </Stat>
            <PrimaryButton text={isActive ? 'Select Reward' : 'Out of Stock'}/>
        </Flex>

    </Card>
  )
}

export default RewardCard