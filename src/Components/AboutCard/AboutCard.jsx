import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card/Card'
import RewardCard from '../RewardCard/RewardCard'

function AboutCard() {
  return (
    <Card>
        <Heading textAlign={'left'} fontSize={'2xl'} mb={12}>
            About this project
        </Heading>
        <Text color="hsl(0, 0%, 48%)" textAlign={'left'} lineHeight={2}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
  </Text>
    <br />
  <Text lineHeight={2} color="hsl(0, 0%, 48%)" textAlign={'left'} mb={4}>
  Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
  to allow notepads, pens, and USB sticks to be stored under the stand.
  </Text>
  
  <RewardCard 
    title={'Bamboo Stand'}
    pledge={'$25 plegde or more'}
    description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
    amountLeft={'101'}
  />

<RewardCard 
    title={'Black Edition Stand'}
    pledge={'$75 plegde or more'}
    description={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
    amountLeft={'64'}
  />

<RewardCard 
    title={'Mahogany Special Edition'}
    pledge={'$200 plegde or more'}
    description={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
    amountLeft={'0'}
  />
        
    </Card>
  )
}

export default AboutCard