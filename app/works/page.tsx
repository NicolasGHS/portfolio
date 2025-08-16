import { Box, SimpleGrid } from "@chakra-ui/react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  visibility: boolean;
  status: string;
  source: string;
};

const Work = () => {
  const projectData: Project[] = projects;
  return (
    <Box>
      <p>What I worked on</p>
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
