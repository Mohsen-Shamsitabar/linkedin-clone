import { cn } from "@/utility";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  size: number;
  src: string | StaticImport;
  alt: string;
  rounded?: boolean;
  className?: string;
};

const Avatar = (props: Props) => {
  const { src, alt, size, className, rounded = true } = props;

  return (
    <div
      className={cn(
        className,
        "image-container",
        rounded ? "rounded-full" : undefined,
      )}
    >
      <Image width={size} height={size} src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
