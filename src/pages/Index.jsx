import { Container, Text, VStack, Box, SimpleGrid, Image, Heading, Button, Select, Input } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 299, category: "Electronics", brand: "Brand A", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 799, category: "Electronics", brand: "Brand B", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 99, category: "Accessories", brand: "Brand A", image: "/images/headphones.jpg" },
];

const Index = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [brand, setBrand] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search") || "";
    filterProducts(searchQuery, category, priceRange, brand);
  }, [location.search, category, priceRange, brand]);

  const filterProducts = (searchQuery, category, priceRange, brand) => {
    let filtered = sampleProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-");
      filtered = filtered.filter((product) => product.price >= min && product.price <= max);
    }

    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    setFilteredProducts(filtered);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Welcome to Our Electronics Store</Heading>
        <Text fontSize="lg" textAlign="center">Find the best electronics at unbeatable prices!</Text>
        <Box>
          <Select placeholder="Select category" onChange={(e) => setCategory(e.target.value)}>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </Select>
          <Select placeholder="Select price range" onChange={(e) => setPriceRange(e.target.value)}>
            <option value="0-100">0 - 100</option>
            <option value="101-500">101 - 500</option>
            <option value="501-1000">501 - 1000</option>
          </Select>
          <Select placeholder="Select brand" onChange={(e) => setBrand(e.target.value)}>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
          </Select>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h2" size="md">{product.name}</Heading>
                <Text mt={2}>${product.price}</Text>
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