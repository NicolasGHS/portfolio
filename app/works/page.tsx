import { Box, SimpleGrid } from "@chakra-ui/react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Work = () => {
  return (
    <Box>
      <p>What I worked on</p>
      <SimpleGrid columns={{ base: 1, md: 3 }} p={6}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Work;
