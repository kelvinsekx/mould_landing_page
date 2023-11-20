import * as React from "react";
import Image from "next/image";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { Container as Main } from "../container";

export const Container: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { bg?: boolean; pad?: boolean }
> = ({ children, bg, pad, className = "", id }) => (
  <Main
    pad={pad}
    id={id}
    className={twMerge(
      clsx("flex flex-col md:flex-row align-center bg-moundUpWhite", {
        "bg-moundUpGreen__light": bg,
      }),
      className
    )}
  >
    {children}
  </Main>
);

export const ImageContainer: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { src: string }
> = ({ src, className }) => (
  <div className={twMerge("min-h-[344px] relative", className)}>
    <Image src={src} alt="" fill className="object-contain" />
  </div>
);
