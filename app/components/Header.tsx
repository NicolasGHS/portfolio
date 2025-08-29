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
            <NavigationMenuLink asChild>
              <Link
                href="/works"
                className="px-3 py-2 rounded hover:bg-muted transition-colors"
              >
                Work
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/skills"
                className="px-3 py-2 rounded hover:bg-muted transition-colors"
              >
                Skills
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/skills"
                className="px-3 py-2 rounded hover:bg-muted transition-colors flex gap-2 items-center"
              >
                Source
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button size="icon" variant="secondary" className="md:hidden">
        <Menu />
      </Button>
    </header>
  );
};
