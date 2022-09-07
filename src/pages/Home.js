import React from 'react'
import {auth, provider, signInWithPopup} from '../firebase'
import {useStateValue as appStateValue} from '../StateProvider'
import { Box, Heading, Container, Text, Button, Center, Flex } from "@chakra-ui/react"


function home() {
    const [{state},dispatch] = appStateValue();

    const login = async () => {
       try {
        const results = await signInWithPopup(auth, provider);
            if(results.user){
                dispatch({
                    type : "SET_AUTHUSER",
                    authUser: results.user,
                })

                const { displayName , photoURL ,email , accessToken } = results.user;
                const storage = window.localStorage;
                storage.setItem('authUser', JSON.stringify({displayName , photoURL ,email , accessToken}));
            }
       } catch (error) {
            alert(error.message);
       }
    }

  return (
    <>
        <Container p={0} maxW='100vw' h='100vh' bg='gray.200' centerContent>
            <Center w='100vw' h='55vh' bg='green.400' mb={4} color='white'>
               <Flex direction='column'>
               <Heading size='3xl' mt={4} mb={4}>
                    Welcome To complainLog
                </Heading>
                <Text fontSize='xl'>
                   you send your complaints ... we answer them
                </Text>
               </Flex>
            </Center>
            <Box maxW='32rem'>
                <Button size='lg' colorScheme='green' mt='24px' type="submit" onClick={login}>
                    Sign In With Google
                </Button>
            </Box>
        </Container>
    </>
  )
}

export default home