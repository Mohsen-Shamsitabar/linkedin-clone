import Image from "next/image";
import type { Slide } from "../types";
import classes from "./styles.module.css";

type Props = {
  slide: Slide;
};

const CarouselSlide = (props: Props) => {
  const { slide } = props;

  return (
    <article className={classes["root"]}>
      <div className={classes["img-container"]}>
        <Image src={slide.img} alt={`${slide.header}-image`} />
      </div>

      <div className={classes["txt-container"]}>
        <h2>{slide.header}</h2>

        <p>{slide.description}</p>
      </div>
    </article>
  );
};

export default CarouselSlide;
