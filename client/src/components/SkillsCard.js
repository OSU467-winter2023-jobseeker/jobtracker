import React from 'react';
import { VStack } from '@chakra-ui/react';
import SkillsRow from './SkillsRow';

function SkillsTable({ skills }) {

    return (
        <VStack padding='5' align='center' justifyContent='center'>
            {skills.map((skill) =>
                <SkillsRow skill={skill} key={skill.skill.toString()} />
            )}
        </VStack>
    )
};

export default SkillsTable;