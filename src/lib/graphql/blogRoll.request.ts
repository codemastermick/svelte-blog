import { gql } from 'graphql-request';

export const blogRoll = gql`
  {
    articles {
      title
      publishDate
      slug
    }
  }
`;
