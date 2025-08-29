import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link, { LinkProps } from "next/link";

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6">
      <Link href="/" className="font-bold text-2xl">
        Nicolas GHS
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/works" passHref legacyBehavior>
              <NavigationMenuLink className="px-3 py-2 rounded hover:bg-muted transition-colors">
                Work
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/skills" passHref legacyBehavior>
              <NavigationMenuLink className="px-3 py-2 rounded hover:bg-muted transition-colors">
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/skills" passHref legacyBehavior>
              <NavigationMenuLink className="px-3 py-2 rounded hover:bg-muted transition-colors flex gap-2 items-center">
                <p>Source</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button size="icon" variant="secondary" className="md:hidden">
        <Menu />
      </Button>
    </header>
  );
};
