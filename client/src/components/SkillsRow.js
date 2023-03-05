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
    Button,
    Container,
    useToast
} from '@chakra-ui/react';

function SkillsRow({ skill, id }) {
    const [skillComfort, setSkillComfort] = useState({
        skill: '',
        comfortLevel: ''
    });

    const handleComfortSubmit = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        var res = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + '/skills', {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(skillComfort)
        })
        const skills = await res.json();
        console.log(skills);
        if (res.status === 200) {
            alert('Skill has been updated!')
        } else {
            alert('Error - skill failed to be updated!')
        }
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
                    <RadioGroup onChange={(value) => setSkillComfort({ skill: skill.skill, comfortLevel: value })} 
                        alignItems='center'
                        defaultValue={skill.comfortLevel}>
                        <Text fontSize='lg'><b>My comfort with this skill:</b></Text>
                        <Stack direction='column'>
                            <Radio value='No experience'>No experience</Radio>
                            <Radio value='Minimal exposure'>Minimal exposure</Radio>
                            <Radio value='Some experience'>Some experience</Radio>
                            <Radio value='Significant experience'>Significant experience</Radio>
                            <Radio value='Mastery'>Mastery</Radio>
                        </Stack>
                        <Button colorScheme='teal' variant='solid' margin={2} size='md' onClick={handleComfortSubmit}>
                            Save my experience
                        </Button>
                    </RadioGroup>
                </Container>
            </Stack>
        </Card>
    )
};

export default SkillsRow;