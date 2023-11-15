import { QuestionList, CheckList } from "../list/list";
import { Container, ImageContainer } from "./creators_container";
import { Header__2 } from "../headers/headers";

export const InvestorsSection = () => {
  return (
    <Container pad className="grid md:grid-cols-[1fr,1fr]">
      <section className="">
        <Header__2 className="text-left">Angels (Investors)</Header__2>
        <article className="mt-7 py-6 font-light">
          <ul className="py-5">
            <QuestionList className="md:text-xl">
              Looking to invest in Startups within Africa?
            </QuestionList>
            <QuestionList className="md:text-xl">
              Do you find it tedious sourcing for relevant information on
              Startups you are interested in?
            </QuestionList>
          </ul>
          <p>If you answered YES to both, We have an offer for you!!!</p>
        </article>
        <article className="py-6 flex-col gap-3.5">
          <p className="font-bold text-2xl">What we offer?</p>
          <ul>
            <CheckList>We inform you of startups that need funding</CheckList>
            <CheckList>
              We provide an established framework for interacting with startups
              which will prevent a breakdown of communications
            </CheckList>
            <CheckList>
              We give you all the relevant details necessary to make a decision
              to invest, or not to.
            </CheckList>
            <CheckList>
              We want to make investing in African Tech Startups as easy as
              walking into a store to purchase some groceries.
            </CheckList>
          </ul>
        </article>
      </section>
      <ImageContainer src={"/amico.png"} />
    </Container>
  );
};
