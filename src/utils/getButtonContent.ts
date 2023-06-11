import { Content, StatusTranslation } from "@/types/buttons-props";

export const getButtonContent = (contentList: Array<T>, index: number) => {
  const statuses = Object.values(contentList);
  return statuses[index];
};
