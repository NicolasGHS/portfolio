"use client";

import { Box, Text, ClientOnly, Skeleton } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

export default function Home() {
  return (
    <ClientOnly fallback={<Skeleton height="20" />}>
      <HomeContent />
    </ClientOnly>
  );
}

function HomeContent() {
  return (
    <Box bg={useColorModeValue("#F1E7DB", "#202022")}>
      <Text color={useColorModeValue("gray.800", "whiteAlpha.900")}>
        Hello, I&apos;m a full stack web developer!
      </Text>
    </Box>
  );
}
