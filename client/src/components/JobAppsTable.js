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


function JobAppsTable({jobApplications}) {
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
                {
                    jobApplications.length > 0  ? jobApplications.map((data, i) => <ReadOnlyJobAppsRow data={data} key={i}/>) : <p></p>
                }
                {/* {
                    jobApplications.length > 0  ? jobApplications.map((data, i) => <ReadOnlyJobAppsRow data={data} onDelete={onDelete} onEdit={onEdit} key={i}/>) : <p></p>
                }    */}
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