import React from 'react';
import { Box, Text, Heading, Card, CardBody, CardHeader } from '@chakra-ui/react';

function SkillsRow({ skill }) {
    console.log('Skill:');
    console.log(skill);

    return (
        <Card align='left' variant='outline' size='md' backgroundColor='aliceblue' borderWidth='thick' w='50%'>
            <CardHeader>
                <Heading
                    fontSize='4xl'
                    align='left'>
                    {skill.skill}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize='lg'>Appears in <b>{skill.skillPercent}%</b> of your applications.</Text>
                <Text fontSize='lg'>Your applications that mention this skill:</Text>
                <Box paddingLeft='5'>
                    {skill.applications.map((application) => 
                        <Text fontSize='lg'>{application}</Text>
                    )}
                </Box>
            </CardBody>
        </Card>
    )
};

export default SkillsRow;