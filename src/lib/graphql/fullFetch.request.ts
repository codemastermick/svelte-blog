import { gql } from 'graphql-request';

export const fullFetch = gql`
  {
    articles(orderBy: publishedAt_DESC) {
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
      categories {
        tag
      }
      excerpt
      body
    }
  }
`;
