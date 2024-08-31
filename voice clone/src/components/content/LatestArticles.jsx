import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCommentDots } from "react-icons/fa";

const LatestArticles = () => {
  const colors = [
    useColorModeValue("teal.100", "teal.700"),
    useColorModeValue("orange.100", "orange.700"),
    useColorModeValue("blue.100", "blue.700"),
    useColorModeValue("green.100", "green.700"),
    useColorModeValue("purple.100", "purple.700"),
  ];

  const cardHoverBg = useColorModeValue("gray.200", "gray.700");
  const textHoverColor = useColorModeValue("blue.600", "blue.300");

  const articles = [
    {
      title: "Solar Energy for Mother Earth and Everyday Smiles",
      category: "Environment",
      imageUrl:
        "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-375x195.jpg",
      date: "5 days ago",
      comments: 1,
    },
    {
      title: "What Is the Definition of an Entrepreneur Lifestyle?",
      category: "Lifestyle",
      imageUrl:
        "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-375x195.jpg.webp",
      date: "5 days ago",
      comments: 3,
    },
    {
      title: "Hipster Yoga at the End of the World",
      category: "Fashion",
      imageUrl:
        "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_2-375x195.jpg.webp",
      date: "5 days ago",
      comments: 0,
    },
  ];

  return (
    <Box p={5}>
      <Heading size="lg" mb={5} textAlign="center">
        LATEST ARTICLES
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        {articles.map((article, index) => (
          <GridItem key={index}>
            <Box
              bg={colors[index % colors.length]}
              rounded="md"
              shadow="md"
              overflow="hidden"
              h="450px"
              transition="transform 0.3s ease-in-out"
              _hover={{
                bg: cardHoverBg,
                transform: "scale(1.05)",
              }}
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
                
                width="full"
                objectFit="cover"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
              <Box p={4}>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  {article.category}
                </Text>
                <Heading
                  size="md"
                  mb={2}
                  fontWeight="bold"
                  transition="color 0.2s"
                  _hover={{
                    color: textHoverColor,
                  }}
                >
                  {article.title}
                </Heading>
                <HStack spacing={2} fontSize="sm" mb={3}>
                  <Text>{article.date}</Text>
                  <Spacer />
                  <Tooltip label="Add Comment">
                    <Icon as={FaCommentDots} cursor="pointer" />
                  </Tooltip>
                </HStack>
                <Button
                  size="sm"
                  colorScheme="teal"
                  variant="outline"
                  _hover={{
                    bg: "teal.500",
                    color: "white",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestArticles;
