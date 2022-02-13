import { gql } from 'graphql-request';

export const fullFetch = gql`
  {
    articles {
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
