import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

function ContactsTable() {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Company</Th>
                        <Th>Contact Name</Th>
                        <Th>Position</Th>
                        <Th>Email</Th>
                        <Th>Phone Number</Th>
                        <Th>Last Contacted Date</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Google</Td>
                        <Td>John Smith</Td>
                        <Td>Software Developer</Td>
                        <Td>example@google.com</Td>
                        <Td>123-456-7890</Td>
                        <Td>01/01/23</Td>
                        <Td><EditIcon /></Td>
                        <Td><DeleteIcon /></Td>
                    </Tr>
                    <Tr>
                        <Td>Google</Td>
                        <Td>John Smith</Td>
                        <Td>Software Developer</Td>
                        <Td>example@google.com</Td>
                        <Td>123-456-7890</Td>
                        <Td>01/01/23</Td>
                        <Td><EditIcon /></Td>
                        <Td><DeleteIcon /></Td>
                    </Tr>
                    <Tr>
                        <Td>Google</Td>
                        <Td>John Smith</Td>
                        <Td>Software Developer</Td>
                        <Td>example@google.com</Td>
                        <Td>123-456-7890</Td>
                        <Td>01/01/23</Td>
                        <Td><EditIcon /></Td>
                        <Td><DeleteIcon /></Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Company</Th>
                        <Th>Contact Name</Th>
                        <Th>Position</Th>
                        <Th>Email</Th>
                        <Th>Phone Number</Th>
                        <Th>Last Contacted Date</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
};

export default ContactsTable;