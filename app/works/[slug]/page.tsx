"use client";

import {useParams} from "next/navigation";
import {projects} from "@/data/projects";
import {Project} from "@/types/projects";
import {SchoolBadge} from "@/components/badges/SchoolBadge";
import {StatusBadge} from "@/components/badges/StatusBadge";

export default function ProjectPage() {
	const {slug} = useParams();
	const project: Project | undefined = projects.find(p => p.slug === slug);

	if (!project) {
		return <div>Project not found!</div>;
	}

	return (
		<div>
			<div>
				{project.forSchool && <SchoolBadge />}
				<StatusBadge status={project.status} />
			</div>
			<h1>{project.title}</h1>
			<p>{project.description}</p>
		</div>
	);
}
