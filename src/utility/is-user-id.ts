import { IdIdentifier } from "@/enums";
import type { UserId, ID } from "@/types";

const isUserId = (id: ID): id is UserId => {
  return id.includes(IdIdentifier.userId);
};

export { isUserId };
