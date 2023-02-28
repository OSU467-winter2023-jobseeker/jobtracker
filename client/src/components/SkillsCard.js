import React from 'react';
import { VStack } from '@chakra-ui/react';
import SkillsRow from './SkillsRow';

function SkillsCard({ skills }) {
    return (
        <VStack padding='5' align='center' justifyContent='center'>
            {Object.values(skills).map((skill) => 
                <SkillsRow skill={skill} />
            )}
        </VStack>
    )
};

export default SkillsCard;