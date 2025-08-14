import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";

const LinkItem = ({ children }) => {
  return <Link href="/">{children}</Link>;
};

const Header = () => {
  return (
    <Heading className="flex justify-around">
      <Link href="/">Nicolas GHS</Link>
      <Link href="/projects">Projects</Link>
      <Link href="https://github.com/NicolasGHS/portfolio.git" target="_blank">
        Source
      </Link>
    </Heading>
  );
};

export default Header;
