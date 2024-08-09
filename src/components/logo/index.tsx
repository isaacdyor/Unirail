import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { LogoIcon } from "@/components/logo/LogoIcon";
import { cn } from "@/lib/utils";

const logoVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      default: "text-xl",
      sm: "text-2xl",
      lg: "text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const logoIconVariants = cva("", {
  variants: {
    size: {
      default: "h-6 w-6",
      sm: "h-6 w-6",
      lg: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type LogoVariants = VariantProps<typeof logoVariants>;

interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    LogoVariants {}

export const Logo: React.FC<LogoProps> = ({
  size = "default",
  className,
  ...props
}) => {
  return (
    <div className={cn(logoVariants({ size }), className)} {...props}>
      <LogoIcon className={logoIconVariants({ size })} />
      <p className={cn("font-medium", logoVariants({ size }))}>Unirail</p>
    </div>
  );
};
