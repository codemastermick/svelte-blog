import { gql } from 'graphql-request';

/* This query will get all articles tagged with the passed string,
 * returning the full contents and sorting them by most recent published
 */
export const getArticlesByTag = gql`
  query GetArticlesByTag($tag: String!) {
    articles(where: { categories_some: { tag_contains: $tag } }, orderBy: publishDate_DESC) {
      slug
      title
      publishDate
      updatedAt
      author {
        name
        avatar
      }
      categories {
        tag
      }
      excerpt
      body
    }
  }
`;
