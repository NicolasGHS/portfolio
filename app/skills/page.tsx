"use client";

import {technologies} from "@/data/technology";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {TechnologyModal} from "@/components/TechnologyModal";
import {Technology} from "@/types/technology";
import {useState} from "react";

export default function Skills() {
	const [selectedTechnology, setSelectedTechnology] =
		useState<Technology | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleTechnologyClick = (technology: Technology) => {
		setSelectedTechnology(technology);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedTechnology(null);
	};
	// Group technologies by category
	const groupedTechnologies = technologies.reduce(
		(acc, tech) => {
			if (!acc[tech.category]) {
				acc[tech.category] = [];
			}
			acc[tech.category].push(tech);
			return acc;
		},
		{} as Record<string, typeof technologies>
	);

	return (
		<div className="container mx-auto px-4 py-6 sm:py-8">
			<div className="mb-6 sm:mb-8">
				<h1 className="text-3xl sm:text-4xl font-bold mb-4">
					Skills & Technologies
				</h1>
				<p className="text-muted-foreground text-base sm:text-lg">
					Here are the technologies and tools I work with.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
				{Object.entries(groupedTechnologies).map(([category, techs]) => (
					<Card key={category} className="h-fit">
						<CardHeader className="pb-3 sm:pb-6">
							<CardTitle className="text-lg sm:text-xl font-semibold">
								{category}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{techs.map(tech => (
									<Badge
										key={tech.id}
										variant="secondary"
										className="text-xs sm:text-sm py-1 px-2 sm:px-3 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
										onClick={() => handleTechnologyClick(tech)}
									>
										{tech.name}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<TechnologyModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				technology={selectedTechnology}
			/>
		</div>
	);
}
