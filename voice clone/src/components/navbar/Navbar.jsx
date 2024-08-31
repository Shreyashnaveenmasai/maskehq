import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    Icon,
    IconButton,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGooglePlusG, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="red.500" px={{ base: 4, md: 8 }} py={2} w="100%">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="1200px"
        mx="auto"
      >
        {/* Mobile Menu Button */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Toggle Menu"}
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="transparent"
          _hover={{ bg: "red.600" }}
        />

        {/* Logo */}
        <Box color="white" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
          
        </Box>

        {/* Desktop Menu */}
        <HStack
          as={"nav"}
          spacing={4}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          {["Home", "Layouts", "Posts", "Food", "Fashion", "Archives", "Features", "Contact"].map(
            (link) => (
              <Button
                key={link}
                variant="ghost"
                color="white"
                _hover={{ bg: "red.600", transform: "scale(1.05)" }}
                _activeLink={{ bg: "red.700", fontWeight: "bold" }}
                _focus={{ boxShadow: "none" }}
              >
                {link}
              </Button>
            )
          )}
        </HStack>

        {/* Social Media Icons */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Icon as={FaFacebook} color="white" w={6} h={6} _hover={{ color: "red.300" }} />
          <Icon as={FaTwitter} color="white" w={6} h={6} _hover={{ color: "red.300" }} />
          <Icon as={FaGooglePlusG} color="white" w={6} h={6} _hover={{ color: "red.300" }} />
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      <Box
        pb={4}
        display={{ md: "none" }}
        transition="max-height 0.2s ease-out"
        overflow="hidden"
        maxHeight={isOpen ? "200px" : "0"}
      >
        <Stack as={"nav"} spacing={4}>
          {["Home", "Layouts", "Posts", "Food", "Fashion", "Archives", "Features", "Contact"].map(
            (link) => (
              <Button
                key={link}
                variant="ghost"
                color="white"
                _hover={{ bg: "red.600" }}
                _activeLink={{ bg: "red.700", fontWeight: "bold" }}
                _focus={{ boxShadow: "none" }}
              >
                {link}
              </Button>
            )
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
