import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import learnImage from "@/public/svgs/not-logged-learn.svg";
import { ImageWithHeader } from "./components";

type Props = {
  className?: string;
};

const LearnSkills = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn(className)}>
      <ImageWithHeader
        imageSrc={learnImage as string}
        imageAlt={"people connecting image"}
        text={"Connect with people who can help"}
      />

      <Button variant="outline">Choose a topic to learn about</Button>
    </div>
  );
};

export default LearnSkills;
