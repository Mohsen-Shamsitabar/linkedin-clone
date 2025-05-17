import { Button } from "@/components/ui";
import briefCase from "@/public/svgs/brief-case.svg";
import Image from "next/image";

const EmptyStatement = () => {
  return (
    <>
      <div className="image-container mb-2">
        <Image src={briefCase as string} alt={"image of a brief case"} />
      </div>

      <h2 className="mb-1">Have more experience?</h2>

      <p className="text-icon text-center text-subtitle1 font-medium mb-3">
        Add past positions to find new career opportunities or to reconnect with
        your past colleagues
      </p>

      <Button color="primary" variant="outline" className="w-full">
        Add experience
      </Button>
    </>
  );
};

export default EmptyStatement;
