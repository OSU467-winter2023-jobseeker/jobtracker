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
import ReadOnlyJobAppsRow from './ReadOnlyJobAppsRow';


function JobAppsTable() {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>List of jobs/interships you have applied to!</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Company</Th>
                        <Th>Position</Th>
                        <Th>Status</Th>
                        <Th>Date Applied</Th>
                        <Th>Job Description</Th>
                        <Th>Location</Th>
                        <Th>Skills</Th>
                        <Th>Contact Info</Th>
                        <Th>Notes</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <ReadOnlyJobAppsRow />
                    <ReadOnlyJobAppsRow />
                    <ReadOnlyJobAppsRow />
                    <ReadOnlyJobAppsRow />
                    <ReadOnlyJobAppsRow />
                    <ReadOnlyJobAppsRow />
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Company</Th>
                        <Th>Position</Th>
                        <Th>Status</Th>
                        <Th>Date Applied</Th>
                        <Th>Job Description</Th>
                        <Th>Location</Th>
                        <Th>Skills</Th>
                        <Th>Contact Info</Th>
                        <Th>Notes</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
};

export default JobAppsTable;