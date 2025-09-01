"use client";

import {
	NavigationMenu,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {Menu} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {NavigationItem} from "./NavigationItem";
import {ModeToggle} from "@/components/mode-toggle";
import {usePathname} from "next/navigation";

export const Header = () => {
	const pathname = usePathname();

	console.log("pad: ", pathname);

	return (
		<header className="w-full flex justify-around gap-8 items-center py-4 px-6">
			<Link href="/" className="font-bold text-2xl">
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
			<Button size="icon" variant="secondary" className="md:hidden">
				<Menu />
			</Button>
		</header>
	);
};
