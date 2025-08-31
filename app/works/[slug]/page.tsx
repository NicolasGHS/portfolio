"use client";

import {useParams} from "next/navigation";
import {projects} from "@/data/projects";
import {Project} from "@/types/projects";
import {SchoolBadge} from "@/components/badges/SchoolBadge";
import {StatusBadge} from "@/components/badges/StatusBadge";
import {ProjectBreadcrumb} from "@/components/ProjectBreadcrumb";
import {ProjectImages} from "@/components/ProjectImages";

export default function ProjectPage() {
	const {slug} = useParams();
	const project: Project | undefined = projects.find(p => p.slug === slug);

	if (!project) {
		return <div>Project not found!</div>;
	}

	return (
		<div>
			<div className="flex gap-3 items-center">
				<ProjectBreadcrumb title={project.title} />
				{project.forSchool && <SchoolBadge />}
				<StatusBadge status={project.status} />
			</div>
			<h1 className="text-2xl mt-6 mb-6">{project.title}</h1>
			<p className="mb-4">{project.description}</p>
			{/* {project.images && <ProjectImages images={project.images} />} */}
			<ProjectImages images={project.images} />
		</div>
	);
}
