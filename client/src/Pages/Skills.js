import { VStack, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LargeHeading from '../components/LargeHeading';
import SkillsCard from '../components/SkillsCard';

function Skills ({}) {
    const [skillsData, setSkillsData] = useState([]);

    const loadSkills = async (response) => {
        const user = JSON.parse(localStorage.getItem('user'));
        var res = await fetch('/skills', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                "Content-Type": "application/json"
            },
        });
        const skills = await res.json();
        setSkillsData(skills);
    };

    useEffect(() => {
        loadSkills();
    }, []);

    return (
        <Box padding='10'>
            <LargeHeading text='Skills in my Applications'></LargeHeading>
            <SkillsCard skills={skillsData}/>
        </Box>
    )
};

export default Skills;