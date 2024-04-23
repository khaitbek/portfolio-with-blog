import { type ComponentPropsWithoutRef } from "react";

// utils
import { cn } from "src/shared/lib/utils";

export const AppTitle = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h1">) => {
  return (
    <h1
      className={cn("font-medium text-2xl mb-8 tracking-tighter", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

export const TypographyH2 = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const TypographyH3 = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h3">) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const TypographyH4 = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h4">) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

export const Paragraph = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) => {
  return (
    <p className={cn("leading-7", className)} {...props}>
      {children}
    </p>
  );
};

export const Blockquote = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"blockquote">) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
};
