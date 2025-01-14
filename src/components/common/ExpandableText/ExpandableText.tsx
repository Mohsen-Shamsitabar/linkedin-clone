"use client";

import * as React from "react";
import classes from "./styles.module.css";

type Props = {
  className?: string;
  text: string;
  maxHeight?: number;
};

const ExpandableText = (props: Props) => {
  const { text, className, maxHeight = 54 } = props;

  const textRef = React.useRef<null | HTMLParagraphElement>(null);

  const [isVisible, setIsVisible] = React.useState(true);

  const handleMoreBtn = () => {
    setIsVisible(c => !c);
  };

  const renderExpandBtn = () => {
    if (isVisible) return null;

    return (
      <a className={classes["expand-btn"]} onClick={handleMoreBtn}>
        more
      </a>
    );
  };

  React.useEffect(() => {
    if (!textRef || !textRef.current) return;

    const { height } = textRef.current.getBoundingClientRect();

    if (height >= maxHeight) {
      setIsVisible(false);
    }
  }, [maxHeight]);

  return (
    <div className={className}>
      <p
        ref={textRef}
        className={
          isVisible ? classes["text--visible"] : classes["text--hidden"]
        }
      >
        {text}
      </p>

      <div className={classes["expand-btn-container"]}>{renderExpandBtn()}</div>
    </div>
  );
};

export default ExpandableText;
