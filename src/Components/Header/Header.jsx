import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  MenuDivider,
} from "@chakra-ui/react";
import "./header.css";

function Header() {
  const [isSmallerThan550] = useMediaQuery("(max-width: 550px)");

  return (
    <Box as={"div"} className={"main_header"} height={400}>
      <Container maxW={"80vw"} pt={5}>
        <Flex
          className="navbar"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={"./images/logo.svg"} />
          {/* Navigation Menu */}
          {isSmallerThan550 ? (
            <Menu>
                {
                  ({isOpen}) => (
                    <>
                    
                    <MenuButton>
                      {isOpen ? <Image src={"./images/icon-close-menu.svg"} /> :<Image src={"./images/icon-hamburger.svg"} />}
                    </MenuButton>
                 
              <MenuList width={'80vw'} mt={3}>
                <MenuItem className="nav-link">
                  About
                </MenuItem>
                <MenuDivider/>
                <MenuItem className="nav-link">
                  Discover
                </MenuItem>
                <MenuDivider/>
                <MenuItem className="nav-link">
                  Get Started
                </MenuItem>
              </MenuList>
              </>
               )
              }
            </Menu>
          ) : (
            <Flex
              className="nav-links"
              color={"white"}
              justifyContent={"space-between"}
              width={"250px"}
            >
              <Text fontWeight={"bold"} className="nav-link">
                About
              </Text>
              <Text fontWeight={"bold"} className="nav-link">
                Discover
              </Text>
              <Text fontWeight={"bold"} className="nav-link">
                Get Started
              </Text>
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
