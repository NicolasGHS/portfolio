import {Project} from "@/types/projects"
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

type ProjectCardProps = {
	project: Project
}

export const ProjectCard = ({project}: ProjectCardProps) => {
	return (
		<div>
			{/* <p>{project.title}</p> */}
			<Card>
				<CardHeader>
					<CardTitle>{project.title}</CardTitle>
					<CardDescription>Card Description</CardDescription>
					<CardAction>Card Action</CardAction>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</div>
	)
}
