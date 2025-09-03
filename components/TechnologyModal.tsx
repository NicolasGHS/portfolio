"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Technology} from "@/types/technology";
import {Project} from "@/types/projects";
import {projects} from "@/data/projects";
import {technologies} from "@/data/technology";
import {Github} from "lucide-react";
import Link from "next/link";

type TechnologyModalProps = {
	isOpen: boolean;
	onClose: () => void;
	technology: Technology | null;
};

export const TechnologyModal = ({isOpen, onClose, technology}: TechnologyModalProps) => {
	if (!technology) return null;

	// Find all projects that use this technology
	const projectsUsingTechnology = projects.filter(project => 
		project.stack.includes(technology.id) && project.visibility
	);

	// Get technology names for each project's stack
	const getTechnologyNames = (stackIds: number[]) => {
		return stackIds
			.map(id => technologies.find(tech => tech.id === id)?.name)
			.filter(Boolean);
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto border-0">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">
						Projects using {technology.name}
					</DialogTitle>
				</DialogHeader>
				
				<div className="mt-6">
					{projectsUsingTechnology.length === 0 ? (
						<div className="text-center py-8 text-muted-foreground">
							<p>No public projects found using {technology.name}</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{projectsUsingTechnology.map(project => (
								<Card key={project.id} className="h-fit">
									{project.tumbnail && (
										<CardContent className="px-0 pb-0">
											<img
												src={project.tumbnail}
												alt={project.title}
												className="aspect-video h-40 rounded-t-xl object-cover w-full"
											/>
										</CardContent>
									)}
									<CardHeader>
										<CardTitle className="text-lg">{project.title}</CardTitle>
										<CardDescription className="text-sm">
											{project.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-0">
										<div className="space-y-4">
											<div>
												<p className="text-sm font-medium mb-2">Tech Stack:</p>
												<div className="flex flex-wrap gap-1">
													{getTechnologyNames(project.stack).map(techName => (
														<Badge 
															key={techName} 
															variant={techName === technology.name ? "default" : "secondary"}
															className="text-xs"
														>
															{techName}
														</Badge>
													))}
												</div>
											</div>
											<div className="flex gap-2 mt-4">
												<Button asChild size="sm">
													<Link href={project.link}>
														View Project
													</Link>
												</Button>
												{project.source && (
													<Button asChild variant="outline" size="sm" className="px-3">
														<Link href={project.source} target="_blank" rel="noopener noreferrer">
															<Github className="h-4 w-4" />
														</Link>
													</Button>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};
