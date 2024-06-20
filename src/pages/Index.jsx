import { Container, Text, VStack, Box, SimpleGrid, Image, Heading, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$799", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$99", image: "/images/headphones.jpg" },
];

const Index = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search") || "";
    setFilteredProducts(
      sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [location.search]);

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Welcome to Our Electronics Store</Heading>
        <Text fontSize="lg" textAlign="center">Find the best electronics at unbeatable prices!</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h2" size="md">{product.name}</Heading>
                <Text mt={2}>{product.price}</Text>
                <Button as={Link} to={`/product/${product.id}`} mt={4} colorScheme="teal">View Details</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;