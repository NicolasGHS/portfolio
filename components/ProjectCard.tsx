import { Box, Image, Text, Link as ChakraLink } from "@chakra-ui/react";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      _hover={{ boxShadow: "lg" }}
    >
      <Image src={image} alt={title} borderRadius="md" mb={3} />
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="md" mb={3}>
        {description}
      </Text>
      <ChakraLink href={link} color="blue.500">
        Bekijk project
      </ChakraLink>
    </Box>
  );
};

export default ProjectCard;
