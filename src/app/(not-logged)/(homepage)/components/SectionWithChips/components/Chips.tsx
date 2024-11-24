import type { Chip } from "@/app/(not-logged)/(homepage)/types";
import { Button } from "@/components/ui";
import Link from "next/link";

const Chips = (chips: Chip[]) => {
  return chips.map(chip => (
    <Button
      key={`${chip.href}-${chip.label}`}
      variant="outline"
      color={chip.variant}
      size={"sm"}
      className="font-bold"
      asChild
    >
      <Link href={chip.href}>{chip.label}</Link>
    </Button>
  ));
};

export default Chips;
