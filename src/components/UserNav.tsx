import { LogOutIcon, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import navItems from "@/navItems";
import Link from "next/link";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

function UserNav({ user }: { user: KindeUser }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full relative h-10 w-10">
          <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage
              src={user?.picture || ""}
              alt={`${user?.given_name} ${user?.family_name} photo`}
            />

            <AvatarFallback>{<User />}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.given_name}
            </p>

            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {navItems.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link
                href={item.href}
                className="w-full flex justify-between items-center cursor-pointer"
              >
                {item.name}
                <span className="w-6 h-6 text-primary">{<item.icon />}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <LogoutLink>
          <DropdownMenuItem className="flex justify-between w-full text-destructive cursor-pointer">
            <span>Sign Out</span>
            <LogOutIcon className="w-5 h-5" />
          </DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;
