import {ProjectCard} from "@/components/ProjectCard";
import {projects} from "@/data/projects";
import {Project} from "@/types/projects";

export default function Works() {
	const projectData: Project[] = projects.filter(
		project => project.visibility === true
	);

	return (
		<div>
			<p className="text-xl font-bold mb-4 text-center">Works</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 gap-x-px justify-items-center">
				{projectData.map(project => (
					<div key={project.id} className="w-full max-w-sm">
						<ProjectCard project={project} />
					</div>
				))}
			</div>
		</div>
	);
}
