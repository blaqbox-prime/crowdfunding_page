import { Flex, Heading, Stat, StatHelpText, StatNumber, Text } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import Card from '../Card/Card'
import {Colors} from '../../Colors';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function RewardCard({title, pledge, description, amountLeft}) {
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
      if(amountLeft <= 0) setIsActive(false);
    }, [amountLeft])
    
  return (
    <Card opacity={!isActive ? 0.5 : 1}>
        <Flex alignItems={'center'} justifyContent={'space-between'} mb={6}>
            <Heading size="md">{title}</Heading>
            <Text color={Colors.brand.moderate_cyan}>
                {pledge}
            </Text>
        </Flex>
        <Text textAlign={'left'} color={Colors.brand.dark_gray} lineHeight={2} mb={6}>
        {description}
        </Text>

        <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Stat>
                <Flex alignItems={'center'}>
                    <StatNumber>{amountLeft}</StatNumber>
                    <StatHelpText ml={2}>Left</StatHelpText>
                </Flex>
            </Stat>
            <PrimaryButton text={isActive ? 'Select Reward' : 'Out of Stock'}/>
        </Flex>

    </Card>
  )
}

export default RewardCard