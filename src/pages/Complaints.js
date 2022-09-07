import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useStateValue as appStateValue} from '../StateProvider'
import { Container, Center, Flex, Box , Text, Avatar, Heading , Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  FormControl,
  FormLabel,
  Select
} from '@chakra-ui/react'

const baseURL = "https://test-demo-gql-backend.herokuapp.com/api/rest";

function Complains() {
  const [complaints, setComplaints] = useState([]);
  const [complaint, setComplaint] = useState("");
  const [source, setSource] = useState("");
  const [company, setCompany] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSaving, setIsSaving] = useState(false);
  const [{authUser}] = appStateValue(); 

  useEffect(() => {
      const getComplaints = async() => {
        try {
          const headers = {
            'Accepted': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'x-hasura-admin-secret' : 'SECRET',
            'x-hasura-access-key' : authUser?.accessToken
          };

          const result = await axios.get(`${baseURL}/data`, headers);
          console.log(result);
        } catch (error) {
          console.log(error);
        }

      }

      getComplaints();
  },[authUser]);

  const onOpenModal = () => {
    setIsSaving(false);
    setComplaint('');
    setSource('');
    setCompany('');
    onOpen();
  }

  const submitComplaint = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setComplaint('');
      setSource('');
      setCompany('');
    }, 5000);
    
  }

  return (
    <>
        <Box maxW='32rem'>
        <Button size='lg' colorScheme='green' mt='24px' type="submit" onClick={onOpenModal}>
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
                    complaints.map(complaint => 
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

        {/* Modal */}
        <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make A Complaint</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
            <FormLabel>Source</FormLabel>
            <Select placeholder='Select source' value={source} onChange={e => setSource(e.target.value)}>
              <option value='Web'>Web</option>
              <option value='Mobile'>Mobile</option>
            </Select>
          </FormControl>
          <FormControl  my='3'>
            <FormLabel>Company</FormLabel>
            <Select placeholder='Select company' value={company} onChange={e => setCompany(e.target.value)}>
              <option value='1'>Company 1</option>
              <option value='2'>Company 2</option>
            </Select>
          </FormControl>
          <FormControl my='3'>
              <FormLabel>Complaint</FormLabel>
              <Textarea
                placeholder='Enter your complaint...'
                size='md'
                resize='none'
                value={complaint}
                onChange={e => setComplaint(e.target.value)}
              />
          </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='green' isLoading={isSaving} onClick={submitComplaint}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Complains