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
			<section className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:py-0">
				<div className="container mx-auto text-center">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
							Nicolas GHS
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
							I am a Full-Stack Developer crafting modern web experiences with
							passion for clean code and innovative solutions.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
							<Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3">
								<Link href="/works">
									View My Work <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="text-base sm:text-lg px-6 sm:px-8 py-3"
							>
								<Link href="/skills">Explore Skills</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Overview */}
			<section className="py-12 sm:py-16 px-4 bg-muted/30">
				<div className="container mx-auto">
					<div className="text-center mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
							Technologies I Work With
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
							Specialized in modern web technologies across the full development
							stack
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
						{techCategories.map(category => {
							const Icon = category.icon;
							return (
								<Card
									key={category.name}
									className="text-center hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
										<Icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-primary" />
										<h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
											{category.name}
										</h3>
										<p className="text-muted-foreground text-xs sm:text-sm">
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
			<section className="py-12 sm:py-16 px-4">
				<div className="container mx-auto">
					<div className="text-center mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
							Featured Projects
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
							A selection of projects that showcase my skills and creativity
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
											className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
										/>
									</div>
								)}
								<CardHeader className="pb-3 sm:pb-6">
									<div className="space-y-2">
										<CardTitle className="text-lg sm:text-xl leading-tight">{project.title}</CardTitle>
										<Badge
											variant={
												project.status === "done" ? "default" : "secondary"
											}
											className="text-xs w-fit"
										>
											{project.status === "done" ? "Completed" : "In Progress"}
										</Badge>
									</div>
									<CardDescription className="text-sm sm:text-base leading-relaxed mt-3 max-w-full sm:max-w-none">
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-0">
									<div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
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
									<div className="flex flex-col sm:flex-row gap-2">
										<Button
											asChild
											variant="outline"
											size="sm"
											className="flex-1 text-xs sm:text-sm"
										>
											<Link href={project.link}>
												View Details <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
											</Link>
										</Button>
										{project.source && (
											<Button asChild variant="ghost" size="sm" className="flex-1 sm:flex-none sm:px-3">
												<a
													href={project.source}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="sm:mr-0 mr-2 h-3 w-3 sm:h-4 sm:w-4" />
													<span className="sm:hidden">Source Code</span>
												</a>
											</Button>
										)}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="text-center mt-8 sm:mt-12">
						<Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8">
							<Link href="/works">
								View All Projects <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-12 sm:py-16 px-4 bg-primary/5">
				<div className="container mx-auto text-center">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
							Let's Build Something Amazing
						</h2>
						<p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
							I'm always interested in new opportunities and exciting projects.
							Whether you have a question or just want to say hi, feel free to
							reach out!
						</p>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
							<Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3">
								<a href="mailto:nicolas.goethals@example.com">Get In Touch</a>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="text-base sm:text-lg px-6 sm:px-8 py-3"
							>
								<a
									href="https://github.com/NicolasGHS"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
