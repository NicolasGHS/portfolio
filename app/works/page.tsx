import { Box, SimpleGrid } from "@chakra-ui/react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";

const Work = () => {
  const projectData: Project[] = projects;
  return (
    <Box>
      <p>My works</p>
      <SimpleGrid columns={{ base: 1, md: 3 }} p={6}>
        {projectData.map(
          (project: Project) =>
            project.visibility && <ProjectCard key={project.id} {...project} />,
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Work;
