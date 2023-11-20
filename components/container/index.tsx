import * as React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type TContainer = {
  pad?: boolean;
};
type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export const Container: React.FC<
  React.PropsWithChildren<TContainer & ContainerProps>
> = ({ children, pad = false, className = "", id }) => {
  return (
    <div
      id={id}
      className={twMerge(
        clsx("max-w-[100rem] mx-auto px-3 sm:px-12 md:px-20 lg:px-30", {
          ["py-10 md:py-28"]: pad,
        }),
        className
      )}
    >
      {children}
    </div>
  );
};

export const LargeContainer: React.FC<
  React.PropsWithChildren<TContainer & ContainerProps>
> = ({ children, pad = false, className = "" }) => {
  return (
    <div
      className={twMerge(
        className,
        clsx("max-w-[120rem] mx-auto", {
          ["py-10 md:py-20"]: pad,
        })
      )}
    >
      {children}
    </div>
  );
};
