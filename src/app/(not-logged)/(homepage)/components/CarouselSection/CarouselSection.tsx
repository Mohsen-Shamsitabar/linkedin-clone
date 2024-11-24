"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import type { CarouselApi } from "@/components/ui/Carousel";
import { cn } from "@/lib/utils";
import * as React from "react";
import { CarouselSlide } from "./components";
import { SLIDES } from "./slides";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const CarouselSection = (props: Props) => {
  const { className } = props;

  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const renderSlides = () => {
    return SLIDES.map((slide, idx) => (
      <CarouselItem key={`${slide.header}-${idx}`}>
        <CarouselSlide slide={slide} />
      </CarouselItem>
    ));
  };

  const renderBackBtn = () => {
    if (current === 1) return null;

    return <CarouselPrevious className={classes["back-btn"]} />;
  };

  const renderNextBtn = () => {
    if (current === count) return null;

    return <CarouselNext className={classes["next-btn"]} />;
  };

  return (
    <section className={cn(className)}>
      <div className="container">
        <Carousel setApi={setApi} className="w-full">
          {renderBackBtn()}

          <CarouselContent>{renderSlides()}</CarouselContent>

          {renderNextBtn()}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
