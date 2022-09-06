import React from 'react'
import { Center, Flex, Box , Text, Avatar, Heading} from '@chakra-ui/react'
import {useStateValue as appStateValue} from '../StateProvider'

function Navbar() {
    const [{authUser}] = appStateValue();

  return (
    <>
        <Box w='100vw' h='70px' bg='green.400' mb={4} p={0} color='white'>
               <Flex direction='row'>
                <Center w='50%' h='70px' >
                <Heading fontSize='4xl' ml={3}>
                   complainLog
                </Heading>
                </Center>
                <Center w='50%' h='inherit' >
                    <Flex direction='row' justify='space-evenly' align='center'>
                        <Text fontSize='xl' mr={3}>
                            { authUser?.displayName || 'User Name' }
                        </Text>
                        <Avatar name={authUser?.displayName || 'User Name'} src={authUser?.photoURL} />
                    </Flex>
                </Center>
               </Flex>
            </Box>
    </>
  )
}

export default Navbar