import { fetchFull } from '$lib/graphql.client';

export const get = async () => {
  try {
    // const allPostFiles = import.meta.glob('../blog/*.md');
    // const iterablePostFiles = Object.entries(allPostFiles);

    // const allPosts = await Promise.all(
    //   iterablePostFiles.map(async ([path, resolver]) => {
    //     const { metadata } = await resolver();
    //     const postPath = path.slice(2, -3); // slice off the leading .. and the trailing .md

    //     return {
    //       meta: metadata,
    //       path: postPath
    //     };
    //   })
    // );
    const allPosts = await fetchFull();

    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf();
    });

    return {
      body: sortedPosts
    };
  } catch (error) {
    return {
      status: 500,
      body: error.message
    };
  }
};
