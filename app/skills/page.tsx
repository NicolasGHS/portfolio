import {technologies} from "@/data/technology";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Skills() {
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
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-4xl font-bold mb-4">Skills & Technologies</h1>
				<p className="text-muted-foreground text-lg">
					Here are the technologies and tools I work with.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{Object.entries(groupedTechnologies).map(([category, techs]) => (
					<Card key={category} className="h-fit">
						<CardHeader>
							<CardTitle className="text-xl font-semibold">
								{category}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{techs.map(tech => (
									<Badge
										key={tech.id}
										variant="secondary"
										className="text-sm py-1 px-3"
									>
										{tech.name}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
