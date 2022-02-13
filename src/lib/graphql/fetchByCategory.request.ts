import { gql } from 'graphql-request';

export const getArticlesByTag = gql`
  query FetchArticlesByCategory($categories: [String!]) {
    articles(where: { categories_contains_some: $categories }) {
      id
      title
      publishDate
      slug
      updatedAt
      author {
        name
        email
        avatar
      }
      categories
      excerpt
      body
    }
  }
`;
