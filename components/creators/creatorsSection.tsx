import { Container, ImageContainer } from "./creators_container";
import { Header__2 } from "../headers/headers";
import { QuestionList } from "../list/list";
import { WaitListButton } from "../button/button";

export const CreatorsSection = () => {
  return (
    <Container pad bg className="grid md:grid-cols-[1fr,1fr]">
      <section className="md:order-2">
        <Header__2 className="text-left">Creators (Founders)</Header__2>
        <article className="mt-7 py-6 font-light">
          <p>Just two questions here, and they are:</p>
          <ul className="py-5">
            <QuestionList className="md:text-lg">
              Do you have a product?
            </QuestionList>
            <QuestionList className="md:text-lg">
              Do you need Funding?
            </QuestionList>
          </ul>
          <p>
            If you answered YES to both, congratulations! We’re your{" "}
            <b>PLUG!</b>
          </p>
        </article>
        <article className="py-6 flex flex-col gap-3.5">
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
          <a href="/" className="font-extrabold">
            CLICK ON THIS LINK TO GET MORE INFORMATION!!!
          </a>
        </article>
        <p className="mt-4">
          <WaitListButton />
        </p>
      </section>
      <ImageContainer className="md:order-1" src={"/Project-Stages.png"} />
    </Container>
  );
};


