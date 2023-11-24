import { Container } from "../container";
import { Header__2 } from "../headers/headers";

const cardInfo = [
  [
    "Creates opportunities for startups to pitch to and raise funds from members of the public passionate about their services",
    "We create an enabling environment for Startups to pitch their business to prospective investors and raise funds. We aim to remove all barriers from fundraising for startups",
  ],
  [
    "Creates opportunities for general members of the public to raise funds in startup",
    "We create an opportunity for everyday people to invest in Startups they are really passionate about!!",
  ],
  [
    "Gives investors access to details of more to startups seeking to raise funds",
    "Our Investors have access to details of undiscovered Startups seeking to raise funds",
  ],
];

export const AboutSection = () => {
  return (
    <Container pad id="about">
      <section className="w-[90%] mx-auto lg:w-full">
        <hgroup>
          <Header__2>Our Vision & Mission</Header__2>
          <p
            id="description"
            className="md:text-xl leading-[164.4%] text-center mt-4"
          >
            Making an investor out of every African
          </p>
        </hgroup>
        <div
          className="grid md:grid-cols-[1fr_1fr_1fr] mt-6 md:mt-[72px] justify-center align-center gap-2 md:gap-4 
           lg:gap-8"
        >
          {cardInfo.map((info, index) => (
            <AboutSection.Card
              key={index}
              h={String(index + 1)}
              s={info[0]}
              e={info[1]}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

const Card = ({ h, s, e }: { h: string; s: string; e: string }) => {
  return (
    <article className="flex flex-col bg-moundUpGreen__light rounded p-8 md:p-6  shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] gap-1">
      <header className="rounded-full bg-moundUpWhite border border-slate-200 w-12 h-12 flex items-center justify-center font-black self-center text-[28px] mb-6 md:mb-12">
        {h}
      </header>
      <p className="font-semibold text-center md:text-left">{s}.</p>
      <p className="hidden md:block">{e}.</p>
    </article>
  );
};
AboutSection.Card = Card;
