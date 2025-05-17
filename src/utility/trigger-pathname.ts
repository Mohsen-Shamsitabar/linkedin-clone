import { joinDecodedSegments } from "@/utility";

const triggerPathname = (pathname: string, triggers: string[]) =>
  triggers.some(trigger => {
    const decodedPathname = joinDecodedSegments(pathname.split("/"));
    const decodedTrigger = joinDecodedSegments(trigger.split("/"));
    const splittedTrigger = trigger.split("/").filter(Boolean);

    if (splittedTrigger.length > 0) {
      return (
        decodedPathname === decodedTrigger ||
        decodedPathname.startsWith(decodedTrigger)
      );
    }
    return decodedPathname === decodedTrigger;
  });

export { triggerPathname };
