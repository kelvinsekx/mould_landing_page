import Image from "next/image";
import { Container, ImageContainer } from "./creators_container";
import { Header__2 } from "../headers/headers";

export const InvestorsSection = () => {
  return (
    <Container
      pad
    >
      <section className="flex flex-col w-full md:w-1/2">
        <Header__2 className="text-left">Angels (Investors)</Header__2>
        <article className="mt-7 py-6 font-light">
          <ul className="font-semibold text-xl py-5">
            <li>Looking to invest in Startups within Africa?</li>
            <li>
              Do you find it tedious sourcing for relevant information on
              Startups you are interested in?
            </li>
          </ul>
          <p>If you answered YES to both, We have an offer for you!!!</p>
        </article>
        <article className="py-6 flex-col gap-3.5">
          <p className="font-bold text-2xl">What we offer?</p>
          <ul>
            <li>We inform you of startups that need funding</li>
            <li>
              We provide an established framework for interacting with startups
              which will prevent a breakdown of communications
            </li>
            <li>
              We give you all the relevant details necessary to make a decision
              to invest, or not to.
            </li>
            <li>
              We want to make investing in African Tech Startups as easy as
              walking into a store to purchase some groceries.
            </li>
          </ul>
        </article>
      </section>
      <ImageContainer src={"/amico.png"} />
    </Container>
  );
};
