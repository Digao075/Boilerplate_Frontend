import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link
} from '@chakra-ui/react';

export function LoginPage() {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        boxShadow="lg"
        bg="white"
        w="full"
        maxW="400px"
      >
        <VStack spacing={6}>
          <Heading>Login</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="seu@email.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input type="password" placeholder="Sua senha" />
          </FormControl>
          <Button colorScheme="orange" w="full">Entrar</Button>
          <Text>
            Não tem uma conta? <Link as={RouterLink} to="#" color="orange.500">Cadastre-se</Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}