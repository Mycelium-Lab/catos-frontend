export const getButtonContent = (contentList: String[], index: number) => {
  const statuses = Object.values(contentList);
  return statuses[index];
};
