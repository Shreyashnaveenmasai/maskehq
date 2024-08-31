import {
    Badge,
    Box,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";

const ContentSection = () => {
    return (
        <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 4, md: 6, lg: 8 }}
            p={{ base: 2, md: 4, lg: 6 }}
        >
            {/* Fashion Section */}
            <VStack align="stretch" spacing={4}>
    {/* Main Fashion Post */}
    <Box
    borderWidth="1px"
    borderRadius="md"
    overflow="hidden"
    boxShadow="sm"
    height="525px"
    _hover={{
        boxShadow: "lg",
        transform: "scale(1.02)",
        transition: "box-shadow 0.3s, transform 0.3s",
    }}
    transition="box-shadow 0.3s, transform 0.3s"
    cursor="pointer"
    onClick={() => window.location.href = '/fashion-post-url'}
>
    <Badge
        colorScheme="pink"
        px={{ base: 2, md: 4 }}
        py={1}
        borderRadius="full"
        // mt={{ base: -2, md: -3 }}
        ml={4}
        my={2}
        transition="background-color 0.3s, transform 0.3s"
        _hover={{
            bg: "pink.600",
            transform: "scale(1.1)",
        }}
    >
        FASHION
    </Badge>
    <Image
        src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_2-375x195.jpg.webp"
        alt="Fashion"
        
        h={{ base: "275px", md: "300px" }}
        objectFit="cover"
        transition="transform 0.3s"
        _groupHover={{
            transform: "scale(1.05)",
        }}
    />
    <Box p={{ base: 3, md: 4 }}>
        <Text color="pink.500" fontWeight="bold" mb={1} textAlign="center">
            Fashion
        </Text>
        <Heading size="md" mb={2}>
            Hipster Yoga at the End of the World
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>
            5 days ago
        </Text>
        <Text fontSize="sm" color="gray.700" noOfLines={3}>
            This is a video post format example. It supports all WordPress common embed features for videos.
        </Text>
        <Text
            mt={2}
            color="pink.500"
            cursor="pointer"
            _hover={{ textDecoration: "underline", color: "pink.600" }}
            onClick={() => alert('Expand description or navigate to the post')}
        >
            Read more
        </Text>
    </Box>
</Box>

{/* Additional Fashion Posts */}
<Box 
    borderWidth="1px" 
    borderRadius="md" 
    overflow="hidden" 
    width={{ base: "full", md: "full" }} 
    _hover={{
        bg: "gray.100",
        boxShadow: "lg",
        transform: "scale(1.03)",
        transition: "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
    }}
    _focus={{
        boxShadow: "outline",
        transform: "scale(1.03)",
    }}
    transition="background-color 0.3s, box-shadow 0.3s, transform 0.3s"
    cursor="pointer"
    aria-label="Fashion post link"
    
>
    <HStack spacing={2} align="flex-start">
        <Image 
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_26-380x260.jpg.webp" 
            alt="Fashion Image 1" 
            boxSize={{ base: "60px", md: "80px" }} 
            objectFit="cover" 
            transition="transform 0.3s"
            _hover={{
                transform: "scale(1.1)",
            }}
        />
        <Box p={2}> 
            <Link color="pink.500" fontWeight="bold" fontSize="md" _hover={{ textDecoration: "underline", color: "pink.600" }}>
                Fashion
            </Link>
            <Text fontSize="sm" mt={1}>
                Staying in Fashion With the Perfect Accessory
            </Text>
        </Box>
    </HStack>
</Box>

<Box 
    borderWidth="1px" 
    borderRadius="md" 
    overflow="hidden" 
    width={{ base: "full", md: "full" }} 
    _hover={{
        bg: "gray.100",
        boxShadow: "lg",
        transform: "scale(1.03)",
        transition: "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
    }}
    _focus={{
        boxShadow: "outline",
        transform: "scale(1.03)",
    }}
    transition="background-color 0.3s, box-shadow 0.3s, transform 0.3s"
    cursor="pointer"
    aria-label="Fashion post link"
    onClick={() => window.location.href = '/fashion-post-url-2'}
>
    <HStack spacing={2} align="flex-start">
        <Image 
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_23-380x260.jpg.webp" 
            alt="Fashion Image 2" 
            boxSize={{ base: "60px", md: "80px" }}  
            objectFit="cover" 
            transition="transform 0.3s"
            _hover={{
                transform: "scale(1.1)",
            }}
        />
        <Box p={2}>  
            <Link color="pink.500" fontWeight="bold" fontSize="md" _hover={{ textDecoration: "underline", color: "pink.600" }}>
                Fashion
            </Link>
            <Text fontSize="sm" mt={1}>
                Colorful Men’s Fashion
            </Text>
        </Box>
    </HStack>
</Box>


</VStack>
            {/* Lifestyle Section */}
            <VStack align="stretch" spacing={4}>
            <Box
    borderWidth="1px"
    borderRadius="md"
    overflow="hidden"
    boxShadow="sm"
    height="525px"
    _hover={{ 
        boxShadow: "lg", 
        transform: "scale(1.02)", 
        transition: "all 0.3s ease-in-out"
    }}
    // mb={4} // Margin bottom for spacing
>
    <Badge
        colorScheme="orange"
        px={{ base: 2, md: 4 }}
        py={1}
        borderRadius="full"
        // mt={{ base: -2, md: -3 }}
        my={2}
        ml={4}
        fontSize={{ base: "sm", md: "md" }} // Responsive font size
        transition="background-color 0.3s ease-in-out" // Transition for hover effect
    >
        LIFESTYLE
    </Badge>
    <Image
        src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-375x195.jpg.webp"
        alt="Lifestyle"
        h={{ base: "275px", md: "300px" }}
        objectFit="cover"
        transition="opacity 0.3s ease-in-out" // Transition for hover effect
        _hover={{ opacity: 0.8 }} // Hover effect
    />
    <Box p={{ base: 3, md: 4 }}>
        <Text color="orange.500" fontWeight="bold" mb={1} textAlign="center">
            Lifestyle
        </Text>
        <Heading size="md" mb={2}>
            What Is the Definition of an Entrepreneur Lifestyle?
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>
            5 days ago
        </Text>
        <Text fontSize="sm" color="gray.700">
            Authentic Blue Bottle put a bird on it slow-carb blog art party viral, Shoreditch DIY gluten-free...
        </Text>
    </Box>
</Box>

{/* Additional Lifestyle Posts */}
<Box 
    borderWidth="1px" 
    borderRadius="md" 
    overflow="hidden" 
    width={{ base: "full", md: "full" }} 
    _hover={{
        bg: "gray.100",
        boxShadow: "lg",
        transform: "scale(1.03)",
        transition: "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
    }}
    _focus={{
        boxShadow: "outline",
        transform: "scale(1.03)",
    }}
    transition="background-color 0.3s, box-shadow 0.3s, transform 0.3s"
    cursor="pointer"
    aria-label="Lifestyle post link"
    onClick={() => window.location.href = '/lifestyle-post-url-1'}
>
    <HStack spacing={2} align="flex-start">
        <Image 
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-634x433.jpg.webp" 
            alt="Lifestyle Image 1" 
            boxSize={{ base: "60px", md: "80px" }} 
            objectFit="cover" 
            transition="transform 0.3s"
            _hover={{
                transform: "scale(1.1)",
            }}
        />
        <Box p={2}> 
            <Link color="pink.500" fontWeight="bold" fontSize="md" _hover={{ textDecoration: "underline", color: "pink.600" }}>
                Lifestyle
            </Link>
            <Text fontSize="sm" mt={1}>
            What Will Natural Beauty Be Like In 100 Years?
            </Text>
        </Box>
    </HStack>
</Box>

<Box 
    borderWidth="1px" 
    borderRadius="md" 
    overflow="hidden" 
    width={{ base: "full", md: "full" }} 
    _hover={{
        bg: "gray.100",
        boxShadow: "lg",
        transform: "scale(1.03)",
        transition: "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
    }}
    _focus={{
        boxShadow: "outline",
        transform: "scale(1.03)",
    }}
    transition="background-color 0.3s, box-shadow 0.3s, transform 0.3s"
    cursor="pointer"
    aria-label="Lifestyle post link"
    onClick={() => window.location.href = '/lifestyle-post-url-2'}
>
    <HStack spacing={2} align="flex-start">
        <Image 
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_15-380x260.jpg.webp" 
            alt="Lifestyle Image 2" 
            boxSize={{ base: "60px", md: "80px" }}  
            objectFit="cover" 
            transition="transform 0.3s"
            _hover={{
                transform: "scale(1.1)",
            }}
        />
        <Box p={2}>  
            <Link color="pink.500" fontWeight="bold" fontSize="md" _hover={{ textDecoration: "underline", color: "pink.600" }}>
                Lifestyle
            </Link>
            <Text fontSize="sm" mt={1}>
            Travelling With Technology – Some Tips From...
            </Text>
        </Box>
    </HStack>
</Box>

</VStack>

            {/* Sidebar for Categories and Featured Posts */}
            <VStack align="stretch" spacing={{ base: 4, md: 6 }}>
                {/* Categories Section */}
                <Box
  borderWidth="1px"
  borderRadius="lg"
  overflow="hidden"
  boxShadow={{ base: "sm", md: "lg" }}
  p={{ base: 4, md: 6 }}
  _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
  transition="all 0.3s ease-in-out"
>
  <Heading size="md" mb={4} color="gray.800" textAlign="center" letterSpacing="wide">
    CATEGORIES
  </Heading>
  {[
    { name: "Environment", color: "purple", count: 9 },
    { name: "Fashion", color: "pink", count: 7 },
    { name: "Food", color: "green", count: 8 },
    { name: "Lifestyle", color: "orange", count: 9 },
    { name: "Music", color: "blue", count: 7 },
    { name: "Technology", color: "teal", count: 10 },
  ].map((category) => (
    <React.Fragment key={category.name}>
      <Flex
        justify="space-between"
        align="center"
        // my={{ base: 3, md: 4 }}
        cursor="pointer"
        bg="white"
        borderWidth="1px"
        borderRadius="md"
        p={{ base: 2, md: 3 }}
        _hover={{
          bg: `${category.color}.100`,
          transform: "translateY(-2px)",
          boxShadow: "md",
        }}
        transition="all 0.2s ease-in-out"
        onClick={() => console.log(`Clicked on ${category.name}`)}
      >
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="bold"
          color="gray.700"
          _hover={{ color: `${category.color}.600` }}
          transition="color 0.2s ease-in-out"
        >
          {category.name}
        </Text>
        <Badge
          colorScheme={category.color}
          fontSize={{ base: "sm", md: "md" }}
          borderRadius="full"
          px={2}
          py={1}
        >
          {category.count}
        </Badge>
      </Flex>
      {category.name !== "Technology" && <Divider />}
    </React.Fragment>
  ))}
</Box>


                {/* Featured Posts Section */}
                <Box
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="sm"
            p={{ base: 3, md: 4 }}
            _hover={{ 
                boxShadow: "md", 
                transform: "scale(1.02)",
                transition: "all 0.3s ease"
            }}
            transition="all 0.3s ease"
        >
            <Heading size="sm" mb={2}>
                FEATURED POSTS
            </Heading>
            <VStack align="stretch" spacing={2}>
                {[
                    { 
                        category: "Environment", 
                        color: "purple", 
                        post: "Solar Energy for Mother Earth and Everyday Smiles",
                        imgSrc: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-380x260.jpg"
                    },
                    { 
                        category: "Lifestyle", 
                        color: "orange", 
                        post: "What Will Natural Beauty Be Like In 100 Years?", 
                        imgSrc: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-634x433.jpg.webp"
                    },
                    // { 
                    //     category: "Lifestyle", 
                    //     color: "orange", 
                    //     post: "What Is the Definition of an Entrepreneur Lifestyle?", 
                    //     imgSrc: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-380x260.jpg.webp"
                    // },
                ].map((featured) => (
                    <Box
                        key={featured.post}
                        p={3}
                        borderWidth="1px"
                        borderRadius="md"
                        _hover={{ bg: "gray.100", cursor: "pointer", transform: "scale(1.02)", transition: "all 0.2s ease" }}
                        transition="all 0.2s ease"
                    >
                        <HStack spacing={4}>
                            <Image src={featured.imgSrc} alt={featured.post} borderRadius="md" boxSize="100px" />
                            <Box>
                                <Link color={`${featured.color}.500`} fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                                    {featured.category}
                                </Link>
                                <Link fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>
                                    {featured.post}
                                </Link>
                            </Box>
                        </HStack>
                        <Divider mt={2} />
                    </Box>
                ))}
            </VStack>
        </Box>
            </VStack>
        </SimpleGrid>
    );
};

export default ContentSection;
