import { useParams } from "react-router-dom";
import { Container, Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", description: "A high-quality smartphone with a sleek design.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$799", description: "A powerful laptop for all your computing needs.", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$99", description: "Noise-cancelling headphones for an immersive experience.", image: "/images/headphones.jpg" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find((product) => product.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Container maxW="container.md" py={10}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={product.image} alt={product.name} />
        <Box p={6}>
          <Heading as="h2" size="lg">{product.name}</Heading>
          <Text fontSize="xl" color="teal.500" mt={2}>{product.price}</Text>
          <Text mt={4}>{product.description}</Text>
          <Button as={Link} to="/cart" mt={4} colorScheme="teal">Add to Cart</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;