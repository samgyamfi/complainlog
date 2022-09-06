import React from 'react'
import { Container, Center, Flex, Box , Text, Avatar, Heading} from '@chakra-ui/react'
import {useStateValue as appStateValue} from '../StateProvider'
import Navbar from '../components/Navbar'
import Complaints from './Complaints'


function Dashboard() {
    const [{authUser}] = appStateValue();   

  return (
    <>
        <Container p={0} maxW='100vw' h='100vh' bg='gray.200' centerContent>
            <Navbar />
            <Complaints />
        </Container>
    </>
  )
}

export default Dashboard