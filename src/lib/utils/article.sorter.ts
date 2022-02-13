export const sortByPublishDate = (articleArray: PostMetadata[]): PostMetadata[] => {
  return articleArray.sort((a, b) => {
    return new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf();
  });
};

export const sortByEditDate = (articleArray: PostMetadata[]): PostMetadata[] => {
  return articleArray.sort((a, b) => {
    return new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf();
  });
};
