export const parseCategories = (categories: CategoryData[]): string[] => {
  const found = [];
  categories.forEach((category: CategoryData) => {
    found.push(category.tag);
  });
  return [...new Set(found)];
};
