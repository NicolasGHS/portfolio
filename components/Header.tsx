"use client";

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  Button,
  Portal,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { useColorModeValue } from "./ui/color-mode";
import NextLink from "next/link";
import ThemeToggleButton from "./Theme-Toggle";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Header = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading
            as="h1"
            size="lg"
            letterSpacing={"tighter"}
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
          >
            Nicolas GHS
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path} target="_self">
            Projects
          </LinkItem>
          <LinkItem
            href="https://github.com/NicolasGHS/portfolio.git"
            path={path}
            target="_blank"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box flex={1} alignItems="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                  <HamburgerIcon />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="projects">
                      <Link as={NextLink} href="/projects">
                        Projects
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="source">
                      <Link
                        as={NextLink}
                        href="https://github.com/NicolasGHS/portfolio.git"
                        target="_blank"
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                      >
                        <IoLogoGithub />
                        Source
                      </Link>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
