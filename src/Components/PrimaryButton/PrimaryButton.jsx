import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../../Colors'

function PrimaryButton({onClick, text}) {
  return (
    <Box as={'button'} backgroundColor={Colors.brand.moderate_cyan}
  onClick={() => {onClick()}}
    rounded={'3xl'}
    px={6}
    py={3}
    h={'45px'}
    _hover={
        {
            cursor: 'pointer',
            backgroundColor: 'hsl(176, 72%, 28%)'
        }
    }
  >
    <Text textColor={'white'} fontWeight={'bold'} fontSize={'sm'}>{text && text}</Text>
  </Box>
  )
}

export default PrimaryButton
