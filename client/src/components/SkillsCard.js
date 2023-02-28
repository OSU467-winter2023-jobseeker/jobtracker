import React from 'react';
import { Container } from '@chakra-ui/react';
import SkillsRow from './SkillsRow';

function SkillsTable({ skills }) {

    return (
        <Container>
            {skills.map((skill) =>
                <SkillsRow skill={skill} key={skill.skill.toString()} />
            )}
        </Container>
    )
};

export default SkillsTable;