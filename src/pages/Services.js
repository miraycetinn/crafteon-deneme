import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

const Services = () => {
    return (
        <Box p={10} textAlign="center">
            <Heading as="h2" size="xl" mb={5}>Hizmetlerimiz</Heading>
            <Stack spacing={4}>
                <Text fontSize="lg">Hizmet 1: Danışmanlık</Text>
                <Text fontSize="lg">Hizmet 2: Yazılım Geliştirme</Text>
                <Text fontSize="lg">Hizmet 3: Destek ve Bakım</Text>
            </Stack>
        </Box>
    );
};

export default Services;
