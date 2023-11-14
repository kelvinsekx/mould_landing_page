import Image from "next/image";
import { Container } from "../container";

export const HeroSection = () => (
  <div className="flex font-normal bg-moundUpGreen__light max-w-[100rem] mx-auto ">
    <section className="w-full lg:w-1/2 text-xl py-32 lg:pl-30">
      <p className="text-base text-center font-semibold leading-[174%] md:font-normal md:text-left md:text-xl md:leading-[164%]">
        THE FUTURE OF STARTUPS IN AFRICA IS HERE!!
      </p>
      <p className="text-moundUpGreen font-black text-lg md:text-4xl leading-[173.4%] text-center md:text-left">
        {`A fully integrated approach to startup funding`.toUpperCase()}
      </p>
      <p className="pt-8 md:pt-10 pb-4">
        Moundup creates a space where startups/MSMEs can seamlessly raise
        capital from members of the public and investors on their own terms,
        while regular people can invest in thriving StartUps which they may not
        have had the opportunity to invest in earlier.
      </p>
      <strong className="font-normal leading-[164.4%]">
        <b className="block">The best part?</b> These will be done on their own
        terms.
      </strong>
    </section>
    <div className="relative h-[38rem] w-1/2 hidden lg:block self-end">
      <Image
        src={"/vector-painted-rocket.png"}
        alt=""
        fill
        className="object-fit object-cover"
      />
    </div>
  </div>
);
