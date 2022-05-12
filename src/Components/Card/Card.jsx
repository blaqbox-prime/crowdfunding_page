import { Box } from '@chakra-ui/react'
import React from 'react'

function Card({children, opacity, py}) {
  return (
    <Box rounded={"md"} boxShadow="sm" borderWidth={'1px'} borderStyle={'solid'} borderColor={'gray.300'} py={py || 10} px={8} textAlign={'center'}
     backgroundColor={'white'}
     position="relative"
     mb={5}
     opacity={opacity && opacity}
    >
    {children}
    </Box>
  )
}

export default Card