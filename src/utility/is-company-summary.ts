import type { CompanySummary, Summary } from "@/types";

const isCompanySummary = (summary: Summary): summary is CompanySummary => {
  return summary.type === "company";
};

export default isCompanySummary;
