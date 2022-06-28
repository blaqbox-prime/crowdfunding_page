import { Center, Divider, Flex, Progress } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card/Card'
import {
    Stat,
    StatNumber,
    StatHelpText,
    useMediaQuery,
  } from '@chakra-ui/react'

function StatsCard() {

  const [isSmallerThan550] = useMediaQuery('(max-width: 550px)');

  return (
    <Card>
        {/* Stats */}
        <Flex alignItems={'center'} justifyContent={'space-between'} mb={4} 
        flexDirection={isSmallerThan550 ? 'column' : 'row'} 
        > 
        <Stat>
            <StatNumber fontSize={'4xl'}>$89,914</StatNumber>
            <StatHelpText>of $100,000 backed</StatHelpText>
        </Stat>

        <Center height={isSmallerThan550 ? 10 : 50} width={isSmallerThan550 ? 200 : 0}><Divider orientation={isSmallerThan550 ? 'horizontal' : "vertical"}/></Center>
        
        <Stat>
            <StatNumber fontSize={'4xl'}>5,007</StatNumber>
            <StatHelpText>total backers</StatHelpText>
        </Stat>

        <Center height={isSmallerThan550 ? 10 : 50} width={isSmallerThan550 ? 200 : 0}><Divider orientation={isSmallerThan550 ? 'horizontal' : "vertical"}/></Center>

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