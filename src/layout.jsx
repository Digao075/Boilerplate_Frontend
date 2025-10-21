import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg="gray.800" color="white" px={8} py={4} boxShadow="md">
      <Flex align="center">
        <Heading size="md">
          <Link as={RouterLink} to="/">
            Meu App
          </Link>
        </Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/login" ml={4}>
            Login
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}