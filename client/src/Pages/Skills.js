import { VStack, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LargeHeading from '../components/LargeHeading';
import SkillsTable from '../components/SkillsCard';

function Skills ({}) {
    const user = JSON.parse(localStorage.getItem('user'));
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
        // var res = await fetch('/skills', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': 'Bearer ' + user.token,
        //         "Content-Type": "application/json"
        //     },
        // });
        // const skills = await res.json();
        const data = fakeData;
        console.log(fakeData);
        setSkillsData(data);
        console.log(skillsData);

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