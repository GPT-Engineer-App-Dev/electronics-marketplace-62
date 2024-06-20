import { Container, Heading, Text, VStack, Button } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Shopping Cart</Heading>
        <Text fontSize="lg" textAlign="center">Your cart is currently empty.</Text>
        <Button colorScheme="teal" alignSelf="center">Continue Shopping</Button>
      </VStack>
    </Container>
  );
};

export default Cart;