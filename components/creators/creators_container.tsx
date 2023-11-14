import * as React from "react";
import Image from 'next/image'

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { Container as Main } from "../container";

export const Container: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { bg?: boolean; pad?: boolean }
> = ({ children, bg, pad, className = ""}) => (
  <Main
    pad={pad}
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

export const ImageContainer = ({src}: {src: string}) => (
  <div className="h-[582px] w-full md:w-1/2 relative">
    <Image src={src} alt="" fill className="object-contain" />
  </div>
);
