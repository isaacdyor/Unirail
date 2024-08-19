import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const NavButtons: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? (
        <Link
          href="/dashboard"
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-full  h-8",
            !isOpen ? "lg:w-auto lg:text-xs" : "null"
          )}
        >
          Dashboard
        </Link>
      ) : (
        <>
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ size: "sm", variant: "secondary" }),
              "w-full h-8",
              !isOpen ? "lg:w-auto lg:text-xs" : "null"
            )}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ size: "sm" }),
              "w-full h-8",
              !isOpen ? "lg:w-auto lg:text-xs" : "null"
            )}
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  );
};
