import { Center, Divider, Flex, Progress } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card/Card'
import {
    Stat,
    StatNumber,
    StatHelpText,
  } from '@chakra-ui/react'

function StatsCard() {
  return (
    <Card>
        {/* Stats */}
        <Flex alignItems={'center'} justifyContent={'space-between'} mb={4}> 
        <Stat>
            <StatNumber fontSize={'4xl'}>$89,914</StatNumber>
            <StatHelpText>of $100,000 backed</StatHelpText>
        </Stat>

        <Center height={50}><Divider orientation="vertical"/></Center>
        
        <Stat>
            <StatNumber fontSize={'4xl'}>5,007</StatNumber>
            <StatHelpText>total backers</StatHelpText>
        </Stat>

        <Center height={50}><Divider orientation="vertical"/></Center>

        <Stat>
            <StatNumber fontSize={'4xl'}>56</StatNumber>
            <StatHelpText>days Left</StatHelpText>
        </Stat>

        </Flex>
        {/* Progress Bar */}
        <Progress
        value={80}
        size={'md'}
        colorScheme={'cyan'}
        rounded={'full'}
        />
    </Card>
  )
}

export default StatsCard