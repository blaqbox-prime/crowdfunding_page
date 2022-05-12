import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card/Card'
import {FaBookmark} from 'react-icons/fa'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

function ProjectHeaderCard({title, description, isBookmarked, toggleBookmark, onBackProjectClick}) {
  return (
    <Card>
      <Image
      position={'absolute'}
      top={'-28px'}
      left={'50%'}
      transform={'auto'}
      translateX={'-50%'}
      src={'/images/logo-mastercraft.svg'}
      alt='mastercraft'
      />
        <Heading as={'h1'} fontWeight={700} fontSize={'2xl'} mt={0}>
            Mastercraft Bamboo Monitor Riser
        </Heading>
        <Text color={'gray'} mt={5} mb={12}>
          A beautiful & handcrafted monitor stand reduce neck and eye strain
        </Text>
       <Flex justifyContent={'space-between'}>

        {/* ---------------------- Back Project Button */}

       <PrimaryButton text={'Back this project'} onClick={onBackProjectClick}/>
    

       {/* ------------------ Bookmark Button */}
       
       <Box as={'button'} backgroundColor={'gray.100'}
       h={'45px'}
       display={'flex'}
       alignItems={'center'}
       justifyContent={'space-between'}
       px={6}
       rounded={'3xl'}
       onClick={()=> {toggleBookmark()}}
       >
         <Box rounded={'50%'}
         display={'flex'}
          height={'50px'}
          w={'50px'}
          alignItems={'center'}
          ml={'-25px'}
          
          backgroundColor={isBookmarked ? 'hsl(176, 50%, 47%)' : 'black'}
          transitionDuration={'.3s'}

         >
             <Icon as={FaBookmark} m={'auto'} 
             color={isBookmarked ? 'white' : 'hsl(0, 0%, 48%)' }
             />
         </Box>
         <Text textColor={'white'}
          fontWeight={'bold'} 
          fontSize={'sm'}
          pl={2}
          transitionDuration={'.3s'}
          color={isBookmarked && 'hsl(176, 50%, 47%)'}
          > 
          {isBookmarked ? 'Bookmarked' : 'Bookmark'} 
          </Text>
       </Box>
       </Flex>
    </Card>
  )
}

export default ProjectHeaderCard


