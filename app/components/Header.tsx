import {
	NavigationMenu,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {NavigationItem} from "./NavigationItem"
import {ModeToggle} from "@/components/mode-toggle"

export const Header = () => {
	return (
		<header className="w-full flex justify-around gap-8 items-center py-4 px-6">
			<Link href="/" className="font-bold text-2xl">
				Nicolas GHS
			</Link>
			<NavigationMenu className="hidden md:block">
				<NavigationMenuList>
					<NavigationItem name="Works" link="/works" />
					<NavigationItem name="Skills" link="/skills" />
					<NavigationItem name="Source" link="/" />
				</NavigationMenuList>
			</NavigationMenu>
			<ModeToggle />
			<Button size="icon" variant="secondary" className="md:hidden">
				<Menu />
			</Button>
		</header>
	)
}
