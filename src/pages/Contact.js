import React from 'react';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box p={10} textAlign="center">
            <Heading as="h2" size="xl" mb={5}>İletişim</Heading>
            <Text fontSize="lg" mb={5}>
                Bizimle iletişime geçmek için aşağıdaki butona tıklayın.
            </Text>
            <Button colorScheme="teal" size="lg" onClick={() => alert('İletişim formu açılacak!')}>
                İletişim Formu
            </Button>
        </Box>
    );
};

export default Contact;
