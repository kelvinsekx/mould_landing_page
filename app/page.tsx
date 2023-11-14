import {HeroSection} from "../components/hero/heroSection"
import {AboutSection} from "../components/about/aboutSection"
import {CreatorsSection} from "../components/creators/creatorsSection"
import {InvestorsSection} from "../components/creators/investorsSection"

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <CreatorsSection />
      <InvestorsSection />
    </main>
  )
}
