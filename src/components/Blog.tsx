import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const Blog = () => {
    const [interviews, setInterviews] = useState<any[]>([]);

    fetch('data.json')
    .then(res => res.json())
    .then(data => setInterviews(data))


    return (
        <Box width="60%">
            <Accordion allowToggle>
  {
    interviews.map(interview => <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' color='yellow' fontWeight='semibold' fontSize='lg'>
              {interview.name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {interview.description}
        </AccordionPanel>
      </AccordionItem>)
  }

  
</Accordion>
        </Box>
    );
};

export default Blog;