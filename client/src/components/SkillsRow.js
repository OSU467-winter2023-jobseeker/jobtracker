import React from 'react';
import { Container, Text, Heading, Card, CardBody, CardHeader, Divider } from '@chakra-ui/react';

function SkillsRow({ skill }) {
    console.log('Skill:');
    console.log(skill);

    return (
        <Card variant='outline'>
            <Divider></Divider>
            <CardHeader>
                <Heading
                    fontSize='4xl'
                    align='left'>
                    {skill.skill}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text>Appears in <b>{skill.skillPercent}%</b> of your applications.</Text>
                <Text>Your applications that mention this skill:</Text>
                {skill.applications.map((application, i) => 
                    <Text>{application}</Text>
                )}
            </CardBody>
        </Card>
    )
};

export default SkillsRow;