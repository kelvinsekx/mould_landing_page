import {twMerge} from 'tailwind-merge'

export const Header__2: React.FC<React.ComponentPropsWithoutRef<"h2">> = ({
  children,
  className = ''
}) => <h2 className={twMerge("font-black text-2xl md:text-3xl lg:text-[2.44125rem] text-center", className)}>{children}</h2>;