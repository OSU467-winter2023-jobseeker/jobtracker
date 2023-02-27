import React from 'react';
import { Container, } from '@chakra-ui/react';

function SkillsRow({ skill, percent, mentionedSkills }) {

    return (
        <Container>
            <Heading 
                as='h2' 
                size='4xl' 
                align='center'>
                {skill}
            </Heading>
            <Text>Appears in {percent} of your applications.</Text>
            <Text>Your applications that mention this skill:</Text>
            {mentionedSkills.map((data, i) =>  {
                <Text data={data} key={i}/>
            })}
        </Container>
    )
};

export default SkillsRow;