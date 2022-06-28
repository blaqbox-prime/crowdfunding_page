import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../../Colors'

function PrimaryButton({onClick, text}) {
  return (
    <Box as={'button'} backgroundColor={text !== 'Out of Stock' ? Colors.brand.moderate_cyan : 'gray'}
  onClick={text !== 'Out of Stock' ? () => {onClick()} : ()=>{}}
    rounded={'3xl'}
    px={6}
    py={3}
    h={'45px'}
    _hover={
        text !== 'Out of Stock' ?
        {
            cursor: 'pointer',
            backgroundColor: 'hsl(176, 72%, 28%)'
        }
        :
        {
          cursor: 'default',
        }
    }
  >
    <Text textColor={'white'} fontWeight={'bold'} fontSize={'sm'}>{text && text}</Text>
  </Box>
  )
}

export default PrimaryButton
