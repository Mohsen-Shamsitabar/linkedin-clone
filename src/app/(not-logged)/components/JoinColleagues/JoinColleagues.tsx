import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import joinColleaguesImg from "@/public/images/join-colleagues-img.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const JoinColleagues = (props: Props) => {
  const { className } = props;

  return (
    <section className={cn(className)}>
      <div className={classes["container"]}>
        <div className={cn("container", classes["txt-container"])}>
          <h2>Join your colleagues, classmates, and friends on LinkedIn.</h2>

          <Button asChild className="w-fit" variant="fill" color="primary">
            <Link href={"/"}>Get started</Link>
          </Button>
        </div>

        <div className={classes["img-container"]}>
          <Image src={joinColleaguesImg} alt={"join colleagues image"} />
        </div>
      </div>
    </section>
  );
};

export default JoinColleagues;
