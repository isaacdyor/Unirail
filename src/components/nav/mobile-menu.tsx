import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { DEFAULT_EASE } from "@/lib/animations";
import { Logo } from "../logo";
import { NavButtons } from "./nav-buttons";
import { X } from "lucide-react";

interface MenuItemType {
  label: string;
  url: string;
}

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  navMenu: MenuItemType[];
}

export const MobileMenu = ({ open, setOpen, navMenu }: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.15, staggerChildren: 0.05, ease: DEFAULT_EASE },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const listItem = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: DEFAULT_EASE },
    },
    exit: { opacity: 0, transition: { duration: 0.05 } },
  };
  const Menu = () => (
    <>
      {navMenu.map((menuItem: MenuItemType) => (
        <m.div variants={listItem} key={menuItem.label}>
          <Link
            href={menuItem.url}
            onClick={() => setOpen(false)}
            className="block hover:bg-background/10 py-1.5 pl-3 pr-4 text-base border-b border-slate-900 font-medium text-foreground "
          >
            {menuItem.label}
          </Link>
        </m.div>
      ))}
    </>
  );

  const isUserLoading = false;
  const isLoggedIn = false;

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        {open && (
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-secondary fixed overflow-hidden inset-0 z-50 h-screen max-h-screen w-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] transform"
          >
            <div className="absolute h-16 px-6 flex items-center justify-between w-screen left-0 top-0 z-50 bg-overlay before:content[''] before:absolute before:w-full before:h-3 before:inset-0 before:top-full before:bg-gradient-to-b before:from-background-overlay before:to-transparent">
              <Link href="/" as="/">
                <Logo />
              </Link>
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground-lighter focus:ring-brand bg-surface-100 hover:bg-surface-200 focus:outline-none focus:ring-2 focus:ring-inset"
              >
                <span className="sr-only">Close menu</span>
                <X className="text-muted-foreground" />
              </button>
            </div>
            <div className="max-h-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] overflow-y-auto pt-20 pb-32 px-4">
              <Menu />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-auto w-full bg-background flex items-stretch p-4 gap-4">
              <NavButtons isOpen={open} />
            </div>
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {open && (
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-background fixed overflow-hidden inset-0 z-40 h-screen w-screen transform"
          />
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};
