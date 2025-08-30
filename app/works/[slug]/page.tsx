"use client";

import {useParams} from "next/navigation";
import {projects} from "@/data/projects";
import {Project} from "@/types/projects";
import {SchoolBadge} from "@/components/badges/SchoolBadge";

export default function ProjectPage() {
	const {slug} = useParams(); // haalt de slug uit de URL
	const project: Project | undefined = projects.find(p => p.slug === slug);

	if (!project) {
		return <div>Project niet gevonden</div>;
	}

	return (
		<div>
			<h1>{project.title}</h1>
			{project.forSchool && <SchoolBadge />}
			<p>{project.description}</p>
		</div>
	);
}
