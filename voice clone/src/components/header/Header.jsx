import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const fontSize = useBreakpointValue({ base: "xs", md: "sm" });
  const showPromoBanner = useBreakpointValue({ base: false, md: true });
  const logoSize = useBreakpointValue({ base: "60px", md: "80px", lg: "100px" });
  const logoPadding = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Box
      as="header"
      boxShadow="md"
      py={{ base: 3, md: 5 }}
      px={{ base: 5, md: 7 }}
      borderBottom="2px solid"
      borderColor="gray.300"
      bg="white"
    >
      {/* Top Bar with Logo and Promo Banner */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        mb={4}
        gap={4}
      >
        {/* Logo */}
        <Box flexShrink={0} p={logoPadding}>
          <Image
            src="https://demo.mekshq.com/voice/wp-content/uploads/2020/07/voice_logo.png.webp"
            alt="Voice Logo"
            boxSize={logoSize}
            objectFit="contain"
          />
        </Box>

        {/* Promo Banner */}
        {showPromoBanner && (
          <Flex
            align="center"
            justify="center"
            bg="gray.100"
            p={3}
            borderRadius="md"
            flex="1"
            mx={{ base: 0, md: 8 }}
            mb={{ base: 4, md: 0 }}
            textAlign="center"
            boxShadow="md"
          >
            <Text fontSize={fontSize} fontWeight="bold" mr={2}>
              Voice is <Text as="span" color="red.500">30% faster!</Text>
            </Text>
            <Text fontSize={fontSize} color="gray.600">
              And more powerful with amazing new features
            </Text>
          </Flex>
        )}

        {/* Find Out More Button */}
        <Button colorScheme="red" size="sm" fontWeight="medium" ml={{ base: 0, md: 0 }}>
          Find Out More
        </Button>
      </Flex>

      {/* Navigation Menu */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        borderTop="2px solid"
        borderColor="gray.300"
        pt={2}
        wrap="wrap"
      >
        {/* Menu Links */}
        {["Home", "Layouts", "Posts", "Food", "Fashion", "Archives", "Features", "Contact"].map((item, index) => (
          <Menu key={index}>
            <MenuButton
              as={Link}
              href="#"
              mx={{ base: 1, md: 2 }}
              fontSize={fontSize}
              // fontWeight={item === "Posts" ? "bold" : "normal"}
              // color={item === "Posts" ? "red.500" : "gray.700"}
              _hover={{ textDecoration: "none", color: "red.500", transform: "scale(1.05)", transition: "transform 0.3s ease" }}
            >
              {item} {item !== "Contact" && <ChevronDownIcon />}
            </MenuButton>
            {item === "Home" && (
              <MenuList zIndex="tooltip">
                <MenuItem fontSize={fontSize}>Big Post + Slider</MenuItem>
                <MenuItem fontSize={fontSize}>Big Slider</MenuItem>
                <MenuItem fontSize={fontSize}>Medium Slider</MenuItem>
                <MenuItem fontSize={fontSize}>No Sidebar</MenuItem>
                <MenuItem fontSize={fontSize}>Minimal Example 1</MenuItem>
                <MenuItem fontSize={fontSize}>Minimal Example 2</MenuItem>
                <MenuItem fontSize={fontSize}>Classic Blog</MenuItem>
                <MenuItem fontSize={fontSize}>With Custom Content</MenuItem>
                
              </MenuList>
            )}
            {item === "Layouts" && (
              <MenuList zIndex="tooltip">
                <MenuItem fontSize={fontSize}>All in One Overview</MenuItem>
                <MenuItem fontSize={fontSize}>Layout A</MenuItem>
                <MenuItem fontSize={fontSize}>Layout B</MenuItem>
                <MenuItem fontSize={fontSize}>Layout C</MenuItem>
                <MenuItem fontSize={fontSize}>Layout D</MenuItem>
                <MenuItem fontSize={fontSize}>Layout E</MenuItem>
                <MenuItem fontSize={fontSize}>Layout F</MenuItem>
                <MenuItem fontSize={fontSize}>Layout G</MenuItem>
                <MenuItem fontSize={fontSize}>Layout H</MenuItem>
              </MenuList>
            )}
            {item === "Posts" && (
              <MenuList zIndex="tooltip">
                <MenuItem fontSize={fontSize}>Standard Post</MenuItem>
                <MenuItem fontSize={fontSize}>Post with Cover</MenuItem>
                <MenuItem fontSize={fontSize}>Post Formats</MenuItem>
                <MenuItem fontSize={fontSize}>Sidebar</MenuItem>
                <MenuItem fontSize={fontSize}>Reviews</MenuItem>
                <MenuItem fontSize={fontSize}>Multi Author Support</MenuItem>
                <MenuItem fontSize={fontSize}>Infinite Scroll Loading</MenuItem>
              </MenuList>
            )}
            {item === "Archives" && (
              <MenuList zIndex="tooltip">
                <MenuItem fontSize={fontSize}>Categories</MenuItem>
                <MenuItem fontSize={fontSize}>Author Archive</MenuItem>
                <MenuItem fontSize={fontSize}>Tag Archive</MenuItem>
                <MenuItem fontSize={fontSize}>Post Format Archive</MenuItem>
                <MenuItem fontSize={fontSize}>Search Results</MenuItem>
                
              </MenuList>
            )}
            {item === "Features" && (
              <MenuList zIndex="tooltip">
                <MenuItem fontSize={fontSize}>What's inside?</MenuItem>
                <MenuItem fontSize={fontSize}>Theme Options</MenuItem>
                <MenuItem fontSize={fontSize}>Categories Module</MenuItem>
                <MenuItem fontSize={fontSize}>WooCommerce</MenuItem>
                <MenuItem fontSize={fontSize}>bbPress</MenuItem>
                <MenuItem fontSize={fontSize}>Typography</MenuItem>
                <MenuItem fontSize={fontSize}>Wordpress 5 blocks</MenuItem>
                <MenuItem fontSize={fontSize}>Shortcodes</MenuItem>
                <MenuItem fontSize={fontSize}>Custom Widgets</MenuItem>
                <MenuItem fontSize={fontSize}>Header Pages</MenuItem>
              </MenuList>
            )}
          </Menu>
        ))}
        <Spacer />
        {/* Search Icon */}
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          variant="ghost"
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          _hover={{ color: "red.500", transform: "scale(1.1)", transition: "transform 0.3s ease" }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
