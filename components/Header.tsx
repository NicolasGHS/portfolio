"use client";

import {
	NavigationMenu,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {Menu, Briefcase, Code, Github} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {NavigationItem} from "./NavigationItem";
import {ModeToggle} from "@/components/mode-toggle";
import {usePathname} from "next/navigation";

export const Header = () => {
	const pathname = usePathname();

	return (
		<header className="w-full flex justify-around gap-8 items-center py-4 px-6">
			<Link
				href="/"
				className="font-bold text-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:text-primary"
			>
				Nicolas GHS
			</Link>
			<NavigationMenu className="hidden md:block">
				<NavigationMenuList>
					<NavigationItem
						name="Works"
						link="/works"
						isActive={pathname == "/works"}
						isSource={false}
					/>
					<NavigationItem
						name="Skills"
						link="/skills"
						isActive={pathname == "/skills"}
						isSource={false}
					/>
					<NavigationItem
						name="Source"
						link="https://github.com/NicolasGHS/portfolio.git"
						isActive={false}
						isSource={true}
					/>
				</NavigationMenuList>
			</NavigationMenu>
			<ModeToggle />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="secondary" className="md:hidden">
						<Menu />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-48">
					<DropdownMenuItem asChild>
						<Link href="/works" className="flex items-center">
							<Briefcase className="mr-2 h-4 w-4" />
							Works
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/skills" className="flex items-center">
							<Code className="mr-2 h-4 w-4" />
							Skills
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<a 
							href="https://github.com/NicolasGHS/portfolio.git" 
							target="_blank" 
							rel="noopener noreferrer"
							className="flex items-center"
						>
							<Github className="mr-2 h-4 w-4" />
							Source Code
						</a>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};
