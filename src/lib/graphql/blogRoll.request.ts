import { gql } from 'graphql-request';

export const blogRoll = gql`
  {
    articles(orderBy: publishedAt_DESC) {
      title
      publishDate
      slug
    }
  }
`;
