import { IdIdentifier } from "@/enums";
import type { CompanyId, ID } from "@/types";

const isCompanyId = (id: ID): id is CompanyId => {
  return id.includes(IdIdentifier.companyId);
};

export { isCompanyId };
