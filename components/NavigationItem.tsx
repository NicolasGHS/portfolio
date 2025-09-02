import {
	NavigationMenuItem,
	NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import {Github} from "lucide-react";

type ItemProps = {
	name: string;
	link: string;
	isActive: boolean;
	isSource: boolean;
};

export const NavigationItem = ({name, link, isActive, isSource}: ItemProps) => {
	return (
		<NavigationMenuItem>
			<NavigationMenuLink asChild>
				{isSource ? (
					<Link
						href={link}
						target="_blank"
						className={`px-3 py-2 flex gap-2 items-center rounded transition-colors hover:underline underline-offset-4 ${isActive ? "bg-purple text-white" : ""}`}
					>
						<Github className="w-5" />
						{name}
					</Link>
				) : (
					<Link
						href={link}
						className={`px-3 py-2 rounded transition-colors hover:underline underline-offset-4 ${isActive ? "bg-purple text-white" : ""}`}
					>
						{name}
					</Link>
				)}
			</NavigationMenuLink>
		</NavigationMenuItem>
	);
};
