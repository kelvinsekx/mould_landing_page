import * as React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const WaitListButton: React.FC<
  React.ComponentPropsWithoutRef<"button">
> = ({ className }) => (
  <Link
    href={`/waitlist`}
    className={twMerge(
      "text-moundUpWhite font-extrabold bg-moundUpGreen rounded py-3 px-2 md:py-[14px] md:px-4 border-none hover:shadow-[inset_100px_0_0_0_#000000] shadow-[inset_0_0_0_0_#E0EBE8] transition-shadow ease-in-out hover:text-[#F1A91B] text-[92%]",
      className
    )}
  >
    Join the Waitlist
  </Link>
);
