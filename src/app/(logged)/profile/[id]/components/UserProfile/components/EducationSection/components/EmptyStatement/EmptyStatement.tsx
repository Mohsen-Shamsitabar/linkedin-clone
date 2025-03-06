import { Button } from "@/components/ui";
import university from "@/public/svgs/university.svg";
import Image from "next/image";

const EmptyStatement = () => {
  return (
    <>
      <div className="image-container mb-2">
        <Image src={university as string} alt={"image of a brief case"} />
      </div>

      <h2 className="mb-1">Education</h2>

      <p className="text-icon text-center text-subtitle1 font-medium mb-3">
        Add your degree and college, get 11x more profile views. Connect with
        your college mates
      </p>

      <Button color="primary" variant="outline" className="w-full">
        Add education
      </Button>
    </>
  );
};

export default EmptyStatement;
