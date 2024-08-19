"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Logo } from "../logo";

import { navMenu } from "@/constants/nav";
import { HamburgerButton } from "./hamburger-button";
import { MobileMenu } from "./mobile-menu";
import { NavButtons } from "./nav-buttons";

export const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-40 transform border-b">
      <div className="absolute inset-0 h-full w-full bg-background opacity-80" />
      <div className="relative mx-auto  backdrop-blur-sm flex h-16 items-center justify-between lg:container lg:px-24 xl:px-36">
        <div className="flex flex-1 items-center justify-between px-6 sm:items-stretch lg:px-0">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Logo />
            </Link>
            <NavigationMenu className="relative z-40 hidden items-center transition-opacity lg:flex">
              <NavigationMenuList className="flex gap-4">
                {navMenu.map((menuItem) => (
                  <NavigationMenuItem
                    className="text-sm font-medium"
                    key={menuItem.label}
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href={menuItem.url}
                        className="focus-visible:text-brand-link text-foreground group-hover:bg-transparent"
                      >
                        {menuItem.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <NavButtons />
          </div>
        </div>
        <HamburgerButton toggleFlyOut={() => setOpen(true)} />
      </div>
      <MobileMenu open={open} setOpen={setOpen} navMenu={navMenu} />
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
