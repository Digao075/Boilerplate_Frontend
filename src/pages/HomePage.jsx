import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export function HomePage() {
  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl">
          Bem-vindo ao seu Novo App!
        </Heading>
        <Text fontSize="xl" color="gray.500">
          Este é o seu boilerplate React + Vite + Chakra UI. Comece a construir editando `src/pages/HomePage.jsx`.
        </Text>
      </VStack>
    </Container>
  );
}