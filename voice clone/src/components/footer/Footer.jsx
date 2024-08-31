import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

function ContentBox({ title, imageSrc, altText, description, viewsOrComments }) {
  return (
    <MotionBox 
      w="100%" 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <Image 
        src={imageSrc} 
        alt={altText} 
        borderRadius="md" 
        mb={2} 
        objectFit="cover" 
        w="100%" 
        h="auto" 
        maxH="160px"
        loading="lazy" 
      />
      <Text fontWeight="semibold" mb={1}>{title}</Text>
      <Text fontSize="sm" color="gray.400">{viewsOrComments}</Text>
    </MotionBox>
  );
}

function Footer() {
  return (
    <Box bg="gray.800" color="white" py={10} px={5}>
      <Flex 
        justifyContent="space-between" 
        flexDirection={{ base: "column", md: "row" }} 
        mb={10} 
        mx="auto" 
        maxW="1200px"
      >
        <VStack alignItems="start" spacing={4} flex="1" maxW={{ base: "100%", md: "30%" }}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>MOST POPULAR</Text>
          <ContentBox 
            title="For Jazz Appreciation Month: Jazz Artists Who..." 
            imageSrc="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_29-380x260.jpg.webp" 
            altText="Jazz Appreciation"
            viewsOrComments="9,023 Views" 
          />
          <ContentBox 
            title="Prepare Yourself for Studio Recording Sessions" 
            imageSrc="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_9-380x260.jpg.webp" 
            altText="Studio Recording"
            viewsOrComments="7,328 Views" 
          />
        </VStack>

        <VStack alignItems="start" spacing={4} flex="1" maxW={{ base: "100%", md: "30%" }}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>TALKED ABOUT</Text>
          <ContentBox 
            title="The Features of the Best Ergonomic Keyboard" 
            imageSrc="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_13-634x433.jpg.webp" 
            altText="Ergonomic Keyboard"
            viewsOrComments="13 Comments" 
          />
          <ContentBox 
            title="Stunning Health Benefits of Eating Chocolates" 
            imageSrc="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_18-634x433.jpg.webp" 
            altText="Health Benefits"
            viewsOrComments="5 Comments" 
          />
        </VStack>

        <VStack alignItems="start" spacing={4} flex="1" maxW={{ base: "100%", md: "30%" }}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>VIDEO OF THE DAY</Text>
          <Box w="100%" borderRadius="md" overflow="hidden">
            <iframe
              width="100%"
              height="200px"
              src="https://www.youtube.com/embed/XsEMu5UCy0g"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </VStack>
      </Flex>

      <HStack justifyContent="center" spacing={6} mb={10}>
        <MotionLink href="#" isExternal aria-label="Instagram" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <FaInstagram size="24px" />
        </MotionLink>
        <MotionLink href="#" isExternal aria-label="Twitter" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <FaTwitter size="24px" />
        </MotionLink>
        <MotionLink href="#" isExternal aria-label="Facebook" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <FaFacebook size="24px" />
        </MotionLink>
        <MotionLink href="#" isExternal aria-label="YouTube" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <FaYoutube size="24px" />
        </MotionLink>
        <MotionLink href="#" isExternal aria-label="Pinterest" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <FaPinterest size="24px" />
        </MotionLink>
      </HStack>

      <Text textAlign="center" fontSize="sm" color="gray.500">
        Copyright © 2024. Created by <Link href="#" color="teal.200" _hover={{ textDecoration: 'underline' }}>Shreyash</Link>. Powered by <Link href="#" color="teal.200" _hover={{ textDecoration: 'underline' }}>React</Link>.
      </Text>
    </Box>
  );
}

export default Footer;
