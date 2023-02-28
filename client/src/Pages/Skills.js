import { VStack, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LargeHeading from '../components/LargeHeading';
import SkillsTable from '../components/SkillsCard';

function Skills ({}) {
    const [skillsData, setSkillsData] = useState([]);

    const fakeData = [
        {
            skill: 'React',
            skillPercent: 24,
            applications: ['xxx', 'yyy', 'zzz']
        },
        {
            skill: 'Git',
            skillPercent: 98,
            applications: ['xxx', 'yyy', 'zzz']
        },
        {
            skill: 'Ruby',
            skillPercent: 78,
            applications: ['xxx', 'yyy', 'zzz']
        },
        {
            skill: 'Python',
            skillPercent: 46,
            applications: ['xxx', 'yyy', 'zzz']
        }
    ];

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
        console.log(skills);
        setSkillsData(skills);
    };

    useEffect(() => {
        loadSkills();
    }, []);

    return (
        <Box padding='10'>
            <LargeHeading text='Skills in my Applications'></LargeHeading>
            <SkillsTable skills={skillsData}/>
        </Box>
    )
};

export default Skills;