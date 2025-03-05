import React from 'react';
import { Box, Heading, Text, Button, Stack, Image } from '@chakra-ui/react';

const Home = () => {
    return (
        <Box 
            bgGradient="linear(to-r, teal.500, blue.500)" 
            color="white" 
            p={10} 
            textAlign="center"
        >
            <Stack spacing={5}>
                <Heading as="h1" size="2xl">Yazılım Şirketimize Hoş Geldiniz</Heading>
                <Text fontSize="xl">
                    En iyi yazılım çözümleri için buradayız. İnovasyon ve mükemmeliyet odaklı çalışıyoruz.
                </Text>
                <Button 
                    colorScheme="teal" 
                    size="lg" 
                    onClick={() => alert('İletişim için tıklayın!')}
                >
                    Bizimle İletişime Geçin
                </Button>
                <Image 
                    src="https://via.placeholder.com/600x300" 
                    alt="Yazılım Şirketi" 
                    borderRadius="md" 
                />
            </Stack>
        </Box>
    );
};

export default Home;
