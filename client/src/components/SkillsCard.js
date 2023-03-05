import React from 'react';
import { VStack } from '@chakra-ui/react';
import SkillsRow from './SkillsRow';

function SkillsCard({ skills }) {
    return (
        <VStack padding='5' align='center' justifyContent='center'>
            {Object.values(skills).map((skill, i) => 
                <SkillsRow skill={skill} key={i}/>
            )}
        </VStack>
    )
};

export default SkillsCard;