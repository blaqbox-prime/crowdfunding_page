import {Button } from '@chakra-ui/react'
import React from 'react'

function RoundedButton({Children}) {
  return (
    <Button
    height={50}
    px={4}
    py={3}
    backgroundColor={'primary.moderate_cyan'}
    > 
    {Children}
    </Button>
  )
}

export default RoundedButton