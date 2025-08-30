"use client";

import {useParams} from "next/navigation";
import {projects} from "@/data/projects";
import {Project} from "@/types/projects";

export default function ProjectPage() {
	const {slug} = useParams(); // haalt de slug uit de URL
	const project: Project | undefined = projects.find(p => p.slug === slug);

	if (!project) {
		return <div>Project niet gevonden</div>;
	}

	return (
		<div>
			<h1>{project.title}</h1>
			<p>{project.description}</p>
		</div>
	);
}
