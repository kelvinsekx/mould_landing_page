import { Container } from "../container"
import { Header__2 } from "../headers/headers";

export const AboutSection = ()=> {
    return (
      <Container pad>
        <section className="w-[90%] mx-auto lg:w-full">
          <hgroup>
            <Header__2>Our Vision & Mission</Header__2>
            <p
              id="description"
              className="text-xl leading-[164.4%] text-center mt-4"
            >
              Making an investor out of every African.
            </p>
          </hgroup>
          <div className="flex flex-col md:flex-row mt-[72px] justify-center align-center gap-2 md:gap-4 
           lg:gap-8">
            {[1, 2, 3].map((_, index) => (
              <AboutSection.Card key={index} />
            ))}
          </div>
        </section>
      </Container>
    );
}

const Card = ()=> {
    return (
      <article className="flex flex-col bg-moundUpGreen__light rounded px-10 py-12 md:p-6  shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <header className="rounded-full bg-moundUpWhite border border-slate-200 w-12 h-12 flex items-center justify-center font-black self-center text-[28px] mb-[48px]">
          1
        </header>
        <p className="font-semibold text-center md:text-left">
          Creates opportunities for startups to pitch to and raise funds from
          members of the public passionate about their services.{" "}
        </p>
        <p className="hidden md:block">
          We create an enabling environment for Startups to pitch their business
          to prospective investors and raise funds. We aim to remove all
          barriers from fundraising for startups.
        </p>
      </article>
    );
}
AboutSection.Card = Card;
