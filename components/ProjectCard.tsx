import {Button} from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardDescription,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import {Project} from "@/types/projects";
import Link from "next/link";

type ProjectCardProps = {
	project: Project;
};

export const ProjectCard = ({project}: ProjectCardProps) => {
	return (
		<Card className="max-w-md pt-0 h-full flex flex-col">
			<CardContent className="px-0">
				<img
					// src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto"
					src={project.tumbnail}
					alt="Banner"
					className="aspect-video h-70 rounded-t-xl object-cover"
				/>
			</CardContent>
			<CardHeader className="flex-grow">
				<CardTitle>{project.title}</CardTitle>
				<CardDescription className="line-clamp-3 text-ellipsis overflow-hidden">
					{project.description}
				</CardDescription>
			</CardHeader>
			<CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch mt-auto">
				<Button variant={"outline"} className="cursor-pointer">
					<Link href={`/works/${project.slug}`}>See project</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};
