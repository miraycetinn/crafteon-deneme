import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

const Projects = () => {
    return (
        <Box p={10} textAlign="center">
            <Heading as="h2" size="xl" mb={5}>Projelerimiz</Heading>
            <Stack spacing={4}>
                <Text fontSize="lg">Proje 1: Web Uygulaması</Text>
                <Text fontSize="lg">Proje 2: Mobil Uygulama</Text>
                <Text fontSize="lg">Proje 3: E-Ticaret Sitesi</Text>
            </Stack>
        </Box>
    );
};

export default Projects;
