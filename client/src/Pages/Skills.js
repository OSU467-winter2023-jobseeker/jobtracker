import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LargeHeading from '../components/LargeHeading';
import SkillsCard from '../components/SkillsCard';

function Skills ({}) {
    const [skillsData, setSkillsData] = useState([]);

    const loadSkills = async (response) => {
        const user = JSON.parse(localStorage.getItem('user'));
        var res = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + '/skills', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                "Content-Type": "application/json"
            },
        });
        const skills = await res.json();
        if (res.status === 200) {
            setSkillsData(skills);
        } else {
            alert('Error - please log in to continue');
        }
        
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