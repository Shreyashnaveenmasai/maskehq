import { Badge, Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';

const items = [
  {
    title: 'Features of the Best Ergonomic Keyboard',
    category: 'Technology',
    image:
      'https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_13-634x433.jpg.webp',
    date: '5 days ago',
  },
  {
    title: 'Making a Commitment to Environmental Sustainability',
    category: 'Environment',
    image:
      'https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_37-634x433.jpg.webp',
    date: '5 days ago',
  },
  {
    title: 'Stunning Health Benefits of Eating Chocolate',
    category: 'Food',
    image:
      'https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_18-634x433.jpg.webp',
    date: '5 days ago',
  },
];

const CustomCarousel = () => {
  return (
    <Flex justify="center" mt={8}>
      <Box>
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          centerMode
          centerSlidePercentage={60}
          showArrows
          autoPlay
          interval={4000}
          transitionTime={500}
          showStatus={false}
        >
          {items.map((item, index) => (
            <Box
              className="carouselImage"
              key={index}
              position="relative"
              width="100%"
              height={{ base: '250px', md: '400px' }}
              p={0.25}
              transition="all 0.3s ease"
            >
              <Image
                className="darken"
                src={item.image}
                alt={item.title}
                objectFit="cover"
                height="100%"
                opacity={0.9}
                filter="brightness(0.6)"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'scale(1.05)',
                  filter: 'brightness(0.8)',
                }}
              />
              <Stack
                position="absolute"
                spacing={2}
                p={4}
                borderRadius="md"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                width="80%"
                alignItems="center"
              >
                <Badge
                  width="fit-content"
                  colorScheme="blue"
                  fontSize="sm"
                  color="white"
                  p={2}
                >
                  {item.category}
                </Badge>
                <Text
                  color="white"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  fontWeight="bold"
                  textAlign="center"
                >
                  {item.title}
                </Text>
                <Text color="white" fontSize="sm">
                  {item.date}
                </Text>
              </Stack>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default CustomCarousel;
