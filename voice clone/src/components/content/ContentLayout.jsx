import { Box, Flex, Grid, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

function ContentLayout() {
  const gridTemplateColumns = useBreakpointValue({ base: '1fr', md: 'repeat(2, 1fr)' });
  const articleFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const headerFontSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  
  return (
    <Grid 
      templateColumns={gridTemplateColumns} 
      gap={8} 
      p={{ base: 4, md: 8 }} 
      maxW="1200px" 
      mx="auto"
      bg="gray.50" 
      borderRadius="md" 
      boxShadow="lg"
    >
      {/* Food Section */}
      <Box>
        <Text 
          fontSize={headerFontSize} 
          fontWeight="bold" 
          mb={6} 
          color="gray.700"
        >
          FOOD
        </Text>

        {/* Article 1 */}
        <Box 
          borderWidth="1px" 
          borderRadius="lg" 
          overflow="hidden" 
          mb={6} 
          boxShadow="md" 
          _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
          transition="all 0.3s ease"
          cursor="pointer"
        >
          <Image 
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_41-375x195.jpg.webp" 
            alt="Broccoli" 
            w="100%" 
            h="auto"
            loading="lazy"
          />
          <Box p={6}>
            <Text fontSize="sm" color="green.600" mb={2}>
              Food
            </Text>
            <Link 
              href="#" 
              fontWeight="bold" 
              fontSize="lg" 
              color="gray.800" 
              _hover={{ color: 'green.500' }}
              d="block"
              mb={2}
              aria-label="Why We Love Broccoli (And You Should, Too!)"
            >
              Why We Love Broccoli (And You Should, Too!)
            </Link>
            <Text fontSize="xs" color="gray.500" mt={2}>5 days ago</Text>
            <Text mt={3} fontSize={articleFontSize} color="gray.600">
              This is an image post format. Note that if you click on the featured image it will open in pop-up...
            </Text>
          </Box>
        </Box>

        {/* Article 2 */}
        <Flex direction="column" gap={6}>
          <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Flex>
              <Image 
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_17-145x100.jpg.webp" 
                alt="Pasta Salad" 
                w="120px" 
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              <Box p={4}>
                <Text fontSize="sm" color="green.600" mb={2}>
                  Food
                </Text>
                <Link 
                  href="#" 
                  fontWeight="bold" 
                  fontSize="md" 
                  color="gray.800" 
                  _hover={{ color: 'green.500' }}
                  aria-label="Italian Pasta Salad With Pepperoni, Mozzarella Cheese..."
                >
                  Italian Pasta Salad With Pepperoni, Mozzarella Cheese...
                </Link>
              </Box>
            </Flex>
          </Box>

          {/* Article 3 */}
          <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Flex>
              <Image 
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_27-145x100.jpg.webp" 
                alt="Wheat Rotini" 
                w="120px" 
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              <Box p={4}>
                <Text fontSize="sm" color="green.600" mb={2}>
                  Food
                </Text>
                <Link 
                  href="#" 
                  fontWeight="bold" 
                  fontSize="md" 
                  color="gray.800" 
                  _hover={{ color: 'green.500' }}
                  aria-label="Pasta makes the world go round – Wheat Rotini..."
                >
                  Pasta makes the world go round – Wheat Rotini...
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Environment Section */}
      <Box>
        <Text 
          fontSize={headerFontSize} 
          fontWeight="bold" 
          mb={6} 
          color="gray.700"
        >
          ENVIRONMENT
        </Text>

        {/* Article 1 */}
        <Box 
          borderWidth="1px" 
          borderRadius="lg" 
          overflow="hidden" 
          mb={6} 
          boxShadow="md" 
          _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
          transition="all 0.3s ease"
          cursor="pointer"
        >
          <Image 
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-375x195.jpg" 
            alt="Solar Energy" 
            w="100%" 
            h="auto"
            loading="lazy"
          />
          <Box p={6}>
            <Text fontSize="sm" color="purple.600" mb={2}>
              Environment
            </Text>
            <Link 
              href="#" 
              fontWeight="bold" 
              fontSize="lg" 
              color="gray.800" 
              _hover={{ color: 'purple.500' }}
              d="block"
              mb={2}
              aria-label="Solar Energy for Mother Earth and Everyday Smiles"
            >
              Solar Energy for Mother Earth and Everyday Smiles
            </Link>
            <Text fontSize="xs" color="gray.500" mt={2}>5 days ago</Text>
            <Text mt={3} fontSize={articleFontSize} color="gray.600">
              Migas ethical heirloom banh mi Intelligentsia meditation. Tofu flexitarian 3 wolf moon, swag...
            </Text>
          </Box>
        </Box>

        <Flex direction="column" gap={6}>
          {/* Article 2 */}
          <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Flex>
              <Image 
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-145x100.jpg.webp" 
                alt="San Francisco" 
                w="120px" 
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              <Box p={4}>
                <Text fontSize="sm" color="purple.600" mb={2}>
                  Environment
                </Text>
                <Link 
                  href="#" 
                  fontWeight="bold" 
                  fontSize="md" 
                  color="gray.800" 
                  _hover={{ color: 'purple.500' }}
                  aria-label="San Francisco is the Most Photographed City in North..."
                >
                  San Francisco is the Most Photographed City in North...
                </Link>
              </Box>
            </Flex>
          </Box>

          {/* Article 3 */}
          <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Flex>
              <Image 
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_16-145x100.jpg.webp" 
                alt="Nature" 
                w="120px" 
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              <Box p={4}>
                <Text fontSize="sm" color="purple.600" mb={2}>
                  Environment
                </Text>
                <Link 
                  href="#" 
                  fontWeight="bold" 
                  fontSize="md" 
                  color="gray.800" 
                  _hover={{ color: 'purple.500' }}
                  aria-label="Nature in Its Splendor"
                >
                  Nature in Its Splendor
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Lifestyle Section */}
      <Box minH="600px">
        <Text 
          fontSize={headerFontSize} 
          fontWeight="bold" 
          mb={6} 
          color="gray.700"
        >
          LIFESTYLE
        </Text>

        {/* Article 1 */}
        <Box 
          borderWidth="1px" 
          borderRadius="lg" 
          overflow="hidden" 
          mb={6} 
          boxShadow="md" 
          _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
          transition="all 0.3s ease"
          cursor="pointer"
        >
          <Image 
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-375x195.jpg.webp" 
            alt="Modern Living" 
            w="100%" 
            h="auto"
            loading="lazy"
          />
          <Box p={6}>
            <Text fontSize="sm" color="blue.600" mb={2}>
              Lifestyle
            </Text>
            <Link 
              href="#" 
              fontWeight="bold" 
              fontSize="lg" 
              color="gray.800" 
              _hover={{ color: 'blue.500' }}
              d="block"
              mb={2}
              aria-label="Modern Living: A Guide to Stylish Interiors"
            >
              Modern Living: A Guide to Stylish Interiors
            </Link>
            <Text fontSize="xs" color="gray.500" mt={2}>2 days ago</Text>
            <Text mt={3} fontSize={articleFontSize} color="gray.600">
              Discover the latest trends in modern living and stylish interiors. Learn how to create a space that reflects your personality...
            </Text>
          </Box>
        </Box>

        <Flex direction="column" gap={6}>
          {/* Article 2 */}
          <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Flex>
              <Image 
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_17-380x260.jpg.webp" 
                alt="Urban Jungle" 
                w="120px" 
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              <Box p={4}>
                <Text fontSize="sm" color="blue.600" mb={2}>
                  Lifestyle
                </Text>
                <Link 
                  href="#" 
                  fontWeight="bold" 
                  fontSize="md" 
                  color="gray.800" 
                  _hover={{ color: 'blue.500' }}
                  aria-label="Urban Jungle: Creating Green Spaces in Your Home"
                >
                  Urban Jungle: Creating Green Spaces in Your Home
                </Link>
              </Box>
            </Flex>
          </Box>

          {/* Article 3 */}
          <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Flex>
              <Image 
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_39-375x195.jpg.webp" 
                alt="Smart Living" 
                w="120px" 
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              <Box p={4}>
                <Text fontSize="sm" color="blue.600" mb={2}>
                  Lifestyle
                </Text>
                <Link 
                  href="#" 
                  fontWeight="bold" 
                  fontSize="md" 
                  color="gray.800" 
                  _hover={{ color: 'blue.500' }}
                  aria-label="Smart Living Solutions for the Modern World"
                >
                  Smart Living Solutions for the Modern World
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Fashion Section */}
      <Box minH="600px">
        <Text 
          fontSize={headerFontSize} 
          fontWeight="bold" 
          mb={6} 
          color="gray.700"
        >
          FASHION
        </Text>

        {/* Article 1 */}
        <Box 
          borderWidth="1px" 
          borderRadius="lg" 
          overflow="hidden" 
          mb={6} 
          boxShadow="md" 
          _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
          transition="all 0.3s ease"
          cursor="pointer"
        >
          <Image 
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-375x195.jpg.webp" 
            alt="Trendy Outfits" 
            w="100%" 
            h="auto"
            loading="lazy"
          />
          <Box p={6}>
            <Text fontSize="sm" color="pink.600" mb={2}>
              Fashion
            </Text>
            <Link 
              href="#" 
              fontWeight="bold" 
              fontSize="lg" 
              color="gray.800" 
              _hover={{ color: 'pink.500' }}
              d="block"
              mb={2}
              aria-label="Trendy Outfits for Every Season"
            >
              Trendy Outfits for Every Season
            </Link>
            <Text fontSize="xs" color="gray.500" mt={2}>3 days ago</Text>
            <Text mt={3} fontSize={articleFontSize} color="gray.600">
              Explore the latest fashion trends and find your perfect outfit for every season. Get tips on styling and accessorizing...
            </Text>
          </Box>
        </Box>

        <Flex direction="column" gap={6}>
          {/* Article 2 */}
          <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Flex>
              <Image 
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_17-380x260.jpg.webp" 
                alt="Street Style" 
                w="120px" 
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              <Box p={4}>
                <Text fontSize="sm" color="pink.600" mb={2}>
                  Fashion
                </Text>
                <Link 
                  href="#" 
                  fontWeight="bold" 
                  fontSize="md" 
                  color="gray.800" 
                  _hover={{ color: 'pink.500' }}
                  aria-label="Street Style: How to Rock Urban Fashion"
                >
                  Street Style: How to Rock Urban Fashion
                </Link>
              </Box>
            </Flex>
          </Box>

          {/* Article 3 */}
          <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <Flex>
              <Image 
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_27-380x260.jpg.webp" 
                alt="Elegant Dresses" 
                w="120px" 
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              <Box p={4}>
                <Text fontSize="sm" color="pink.600" mb={2}>
                  Fashion
                </Text>
                <Link 
                  href="#" 
                  fontWeight="bold" 
                  fontSize="md" 
                  color="gray.800" 
                  _hover={{ color: 'pink.500' }}
                  aria-label="Elegant Dresses for Formal Occasions"
                >
                  Elegant Dresses for Formal Occasions
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
}

export default ContentLayout;
