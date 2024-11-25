import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ARTICLE_CHIPS,
  GAME_CHIPS,
  INTERNSHIP_CHIPS,
  SOFTWARE_CHIPS,
} from "./chips";
import {
  CarouselSection,
  ConnectWithPpl,
  Directory,
  HeroSection,
  JoinColleagues,
  LearnSkills,
  SectionWithChips,
  WhySection,
} from "./components";
import classes from "./styles.module.css";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <HeroSection />

      <SectionWithChips
        header="Explore collaborative articles"
        description="We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI."
        chips={ARTICLE_CHIPS}
        className={classes["zinc-section"]}
      />

      <SectionWithChips
        header="Find the right job or internship for you"
        chips={INTERNSHIP_CHIPS}
        className={classes["section"]}
      />

      <section className={cn(classes["orange-section"], "hidden md:block")}>
        <div className="container flex flex-col items-center justify-center">
          <h2>Post your job for millions of people to see</h2>

          <Link href={"/"}>
            <Button variant="outline" color="primary">
              Post a job
            </Button>
          </Link>
        </div>
      </section>

      <SectionWithChips
        header="Discover the best software tools"
        description="Connect with buyers who have first-hand experience to find the best products for you."
        chips={SOFTWARE_CHIPS}
        className={classes["zinc-section"]}
      />

      <SectionWithChips
        header="Keep your mind sharp with games"
        description="Take a break and reconnect with your network through quick daily games."
        chips={GAME_CHIPS}
        className={classes["section"]}
      />

      <CarouselSection className={classes["orange-section"]} />

      <section className={classes["section"]}>
        <div className="container flex flex-col gap-12 md:flex-row md:justify-between">
          <ConnectWithPpl />

          <LearnSkills />
        </div>
      </section>

      <WhySection className={classes["orange-section"]} />

      <JoinColleagues className={classes["section"]} />

      <Directory className={classes["zinc-section"]} />
    </div>
  );
};

export default HomePage;
