import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {projects} from "@/data/projects";
import {technologies} from "@/data/technology";
import {
	ArrowRight,
	Github,
	ExternalLink,
	Code,
	Database,
	Palette,
	Server,
} from "lucide-react";

export default function Home() {
	// Get featured projects (visible ones)
	const featuredProjects = projects
		.filter(project => project.visibility)
		.slice(0, 3);

	// Get technology categories with icons
	const techCategories = [
		{
			name: "Frontend",
			icon: Palette,
			count: technologies.filter(t => t.category === "Frontend").length,
		},
		{
			name: "Backend",
			icon: Server,
			count: technologies.filter(t => t.category === "Backend").length,
		},
		{
			name: "Database",
			icon: Database,
			count: technologies.filter(t => t.category === "Database").length,
		},
		{
			name: "CMS",
			icon: Code,
			count: technologies.filter(t => t.category === "CMS").length,
		},
	];

	const getTechnologyName = (id: number) => {
		return technologies.find(tech => tech.id === id)?.name || "";
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative py-20 lg:py-32 px-4">
				<div className="container mx-auto text-center">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							Nicolas GHS
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
							I am a Full-Stack Developer crafting modern web experiences with
							passion for clean code and innovative solutions
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg" className="text-lg px-8">
								<Link href="/works">
									View My Work <ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="text-lg px-8"
							>
								<Link href="/skills">Explore Skills</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Overview */}
			<section className="py-16 px-4 bg-muted/30">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Technologies I Work With
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Specialized in modern web technologies across the full development
							stack
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{techCategories.map(category => {
							const Icon = category.icon;
							return (
								<Card
									key={category.name}
									className="text-center hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<Icon className="h-10 w-10 mx-auto mb-4 text-primary" />
										<h3 className="font-semibold text-lg mb-2">
											{category.name}
										</h3>
										<p className="text-muted-foreground">
											{category.count} technologies
										</p>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="py-16 px-4">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Featured Projects
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							A selection of projects that showcase my skills and creativity
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{featuredProjects.map(project => (
							<Card
								key={project.id}
								className="group hover:shadow-xl transition-all duration-300"
							>
								{project.tumbnail && (
									<div className="relative overflow-hidden rounded-t-lg">
										<img
											src={project.tumbnail}
											alt={project.title}
											className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
										/>
									</div>
								)}
								<CardHeader>
									<div className="flex items-center justify-between">
										<CardTitle className="text-xl">{project.title}</CardTitle>
										<Badge
											variant={
												project.status === "done" ? "default" : "secondary"
											}
										>
											{project.status === "done" ? "Completed" : "In Progress"}
										</Badge>
									</div>
									<CardDescription className="text-base leading-relaxed">
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.stack.slice(0, 3).map(techId => (
											<Badge key={techId} variant="outline" className="text-xs">
												{getTechnologyName(techId)}
											</Badge>
										))}
										{project.stack.length > 3 && (
											<Badge variant="outline" className="text-xs">
												+{project.stack.length - 3} more
											</Badge>
										)}
									</div>
									<div className="flex gap-2">
										<Button
											asChild
											variant="outline"
											size="sm"
											className="flex-1"
										>
											<Link href={project.link}>
												View Details <ExternalLink className="ml-2 h-4 w-4" />
											</Link>
										</Button>
										<Button asChild variant="ghost" size="sm">
											<a
												href={project.source}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="h-4 w-4" />
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="text-center mt-12">
						<Button asChild variant="outline" size="lg">
							<Link href="/works">
								View All Projects <ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 px-4 bg-primary/5">
				<div className="container mx-auto text-center">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Let's Build Something Amazing
						</h2>
						<p className="text-xl text-muted-foreground mb-8 leading-relaxed">
							I'm always interested in new opportunities and exciting projects.
							Whether you have a question or just want to say hi, feel free to
							reach out!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg" className="text-lg px-8">
								<a href="mailto:nicolas.goethals@example.com">Get In Touch</a>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="text-lg px-8"
							>
								<a
									href="https://github.com/NicolasGHS"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-5 w-5" />
									GitHub
								</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
