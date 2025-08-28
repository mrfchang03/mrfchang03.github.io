import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // base styles (keep your shape/typography here)
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        // light + dark fallbacks
        default:
          "bg-accent text-primary hover:bg-accentHover " +
          "dark:bg-accentDark dark:text-primary dark:hover:bg-accentDarkHover",
        primary:
          "bg-primary text-white " +
          "dark:bg-surfaceDark dark:text-textDark",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary " +
          "dark:border-accentDark dark:text-accentDark dark:hover:bg-accentDark dark:hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
      // optional: let you choose square vs pill at call-site
      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "full",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
