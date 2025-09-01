import {
	NavigationMenuItem,
	NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";

type ItemProps = {
	name: string;
	link: string;
	isActive: boolean;
};

export const NavigationItem = ({name, link, isActive}: ItemProps) => {
	return (
		<NavigationMenuItem>
			<NavigationMenuLink asChild>
				<Link
					href={link}
					className={`px-3 py-2 rounded ${isActive ? "bg-purple-400" : ""}  transition-colors hover:underline underline-offset-4`}
				>
					{name}
				</Link>
			</NavigationMenuLink>
		</NavigationMenuItem>
	);
};
