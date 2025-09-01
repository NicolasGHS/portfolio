import {
	NavigationMenuItem,
	NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";

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
						className={`px-3 py-2 rounded transition-colors hover:underline underline-offset-4 ${isActive ? "bg-purple text-white" : ""}`}
					>
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
