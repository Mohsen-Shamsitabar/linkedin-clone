import { Button } from "@/components/ui";
import connectImage from "@/public/svgs/not-logged-connect.svg";
import { cn } from "@/utility";
import { ImageWithHeader } from "./components";

type Props = {
  className?: string;
};

const ConnectWithPpl = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn(className)}>
      <ImageWithHeader
        imageSrc={connectImage as string}
        imageAlt={"people connecting image"}
        text={"Connect with people who can help"}
      />

      <Button variant="outline">Find people you know</Button>
    </div>
  );
};

export default ConnectWithPpl;
