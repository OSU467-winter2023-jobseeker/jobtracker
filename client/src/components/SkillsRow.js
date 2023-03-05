import React, { useState } from 'react';
import { Box, 
    Text, 
    Heading, 
    Card, 
    CardBody, 
    CardHeader,
    RadioGroup,
    Radio, 
    Stack,
    useRadioGroup,
    Container
} from '@chakra-ui/react';

function SkillsRow({ skill, id }) {
    const [skillComfort, setSkillComfort] = useState([]);

    const updateSkillComfort = async (response) => {
        const user = JSON.parse(localStorage.getItem('user'));
        var res = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + '/skills', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                "Content-Type": "application/json"
            },
        });
        const skills = await res.json();
        setSkillComfort(skills);
    };


    return (
        <Card key={id} align='left' variant='outline' size='md' backgroundColor='aliceblue' borderWidth='thick' w='70%'>
            <Stack direction='horizontal' spacing='5' align='start'>
                <CardHeader>
                    <Heading
                        fontSize='4xl'
                        align='start'
                        p='2'>
                        {skill.skill}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Container align='start'>
                        <Text fontSize='lg'>Appears in <b>{skill.skillPercent}%</b> of your applications.</Text>
                        <Text fontSize='lg'><br></br>Your applications that mention this skill:</Text>
                        <Box paddingLeft='5'>
                            {skill.applications.map((application, i) => 
                                <Text key={i} fontSize='lg'><b>{application}</b></Text>
                            )}
                        </Box>
                    </Container>
                </CardBody>
                <Container alignContent='right' verticalAlign='center' p='5'>
                    <RadioGroup onChange={updateSkillComfort} alignItems='center' defaultValue='No experience'>
                        <Text fontSize='lg'><b>My comfort with this skill:</b></Text>
                        <Stack direction='column'>
                            <Radio value='No experience'>No experience</Radio>
                            <Radio value='Minimal exposure'>Minimal exposure</Radio>
                            <Radio value='Some experience'>Some experience</Radio>
                            <Radio value='Significant experience'>Significant experience</Radio>
                            <Radio value='Mastery'>Mastery</Radio>
                        </Stack>
                    </RadioGroup>
                </Container>
            </Stack>
        </Card>
    )
};

export default SkillsRow;