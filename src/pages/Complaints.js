import React, {useState, useEffect} from 'react'
import { Container, Center, Flex, Box , Text, Avatar, Heading , Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button

} from '@chakra-ui/react'


function Complains() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {

  },[]);

  const handleComplain = () => {
    
  }

  return (
    <>
        <Box maxW='32rem'>
        <Button size='lg' colorScheme='green' mt='24px' type="submit" onClick={handleComplain}>
            Make a complaint
        </Button>
        </Box>
        <Center w='90vw' mt='4' bg='whiteAlpha.700'>
          <TableContainer >
              <Table display='block' variant='simple'>
            <TableCaption>Complaints Made</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Complaint ID</Th>
                    <Th>Complaint</Th>
                    <Th>Company Name</Th>
                    <Th>Source</Th>
                    <Th>Type</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  { 
                    complaints.length && complaints.map(complaint => 
                      <Tr >
                        <Td>{ complaint.id }</Td>
                        <Td> { complaint.complaint }</Td>
                        <Td> {complaint.company} </Td>
                        <Td> { complaint.source}</Td>
                        <Td> { complaint.type} </Td>
                      </Tr>
                      )
                  }
                </Tbody>
                
              </Table>
          </TableContainer>
        </Center>
    </>
  )
}

export default Complains