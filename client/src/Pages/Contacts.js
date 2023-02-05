import { Box, Center, Container, Flex, VStack, Text, Heading } from '@chakra-ui/react';
import ContactsTable from '../components/ContactsTable';
import ContactsAddModal from '../components/ContactsAddModal';

function Contacts() {
    return (
        <VStack>
            <Box>
                <Center>
                    <ContactsTable />
                </Center>
            </Box>
            <Box>
                {/* <Center>
                    <ContactsAddModal />
                </Center> */}
            </Box>

        </VStack>

    )
};

export default Contacts;