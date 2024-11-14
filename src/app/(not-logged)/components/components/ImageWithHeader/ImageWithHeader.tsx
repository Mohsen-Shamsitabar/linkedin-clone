import Image from "next/image";
import classes from "./styles.module.css";

type Props = {
  imageSrc: string;
  imageAlt: string;
  text: string;
};

const ImageWithHeader = (props: Props) => {
  const { imageSrc, text, imageAlt } = props;

  return (
    <div className={classes["root"]}>
      <div className="mb-4">
        <Image src={imageSrc} alt={imageAlt} />
      </div>

      <h2>{text}</h2>
    </div>
  );
};

export default ImageWithHeader;
