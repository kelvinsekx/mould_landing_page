import Image from "next/image";
import { Container, ImageContainer } from "./creators_container";
import { Header__2 } from "../headers/headers";

export const CreatorsSection = () => {
  return (
    <Container pad bg className="md:flex-row-reverse">
      <section className="flex flex-col w-full md:w-1/2">
        <Header__2 className="text-left">Creators (Founders)</Header__2>
        <article className="mt-7 py-6 font-light">
          <p>Just two questions here, and they are:</p>
          <ul className="font-semibold text-xl py-5">
            <li>Do you have a product?</li>
            <li>Do you need Funding?</li>
          </ul>
          <p>
            If you answered YES to both, congratulations! We’re your{" "}
            <b>PLUG!</b>
          </p>
        </article>
        <article className="py-6 flex-col gap-3.5">
          <p className="font-bold text-2xl">What we offer?</p>
          <p>
            We offer you an opportunity to raise capital easily and not just
            from anyone but from a crop of people who actually believe in your
            vision and see it as one of the Products that can take Africa to the
            next Level. We connect you with REGULAR people as well as VC’s who
            are interested in investing in the next big thing! Interested in
            more Information? Moundup Africa provides a mutually beneficial
            relationship where you, as a Creator can engage with people who like
            your product and want to see you go to the next level,
          </p>
          <a href="/" className="font-extrabold">CLICK ON THIS LINK TO GET MORE INFORMATION!!!</a>
        </article>
      </section>
      <ImageContainer src={"/Project-Stages.png"} />
    </Container>
  );
};

