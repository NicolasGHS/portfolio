"use client";

import React from "react";

import {
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  Button,
  Portal,
  ClientOnly,
  Skeleton,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { useColorModeValue } from "./ui/color-mode";
import NextLink from "next/link";
import ThemeToggleButton from "./Theme-Toggle";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
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

interface HeaderProps {
  path: string;
  [key: string]: any;
}

const Header = (props: HeaderProps) => {
  const [hover, setHover] = React.useState(false);

  return (
    <ClientOnly fallback={<Skeleton height="16" />}>
      <HeaderContent hover={hover} setHover={setHover} {...props} />
    </ClientOnly>
  );
};

const HeaderContent = ({ path, hover, setHover, ...props }: HeaderProps & { hover: boolean; setHover: (hover: boolean) => void }) => {
  const defaultSpanColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Flex
      as="header"
      w="100%"
      bg={useColorModeValue("#F1E7DB", "#202022")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      align="center"
      justify="space-between"
      p={2}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading
          as="h1"
          size="lg"
          letterSpacing={"tighter"}
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          cursor="pointer"
        >
          <Link href="/" _hover={{ textDecoration: "none" }}>
            Nicolas{" "}
            <Box
              as="span"
              transition="all 0.3s cubic-bezier(.4,0,.2,1)"
              fontWeight="bold"
              color={hover ? "teal.500" : defaultSpanColor}
            >
              {hover ? "Ghyselincks" : "GHS"}
            </Box>
          </Link>
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
          Work
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
      <Flex align="center">
        <ThemeToggleButton />
        <Box ml={2} display={{ base: "inline-block", md: "none" }}>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline" size="sm">
                <HiOutlineMenuAlt3 />
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="work">
                    <Link as={NextLink} href="/work">
                      Work
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
      </Flex>
    </Flex>
  );
};

export default Header;
