import {ProjectCard} from "@/components/ProjectCard";
import {projects} from "@/data/projects";
import {Project} from "@/types/projects";

export default function Works() {
	const projectData: Project[] = projects.filter(
		project => project.visibility === true
	);

	return (
		<div>
			<p>Works</p>
			<div className="flex">
				{projectData.map(project => (
					<div key={project.id}>
						<ProjectCard project={project} />
					</div>
				))}
			</div>
		</div>
	);
}
