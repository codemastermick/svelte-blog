import { gql } from 'graphql-request';

export const categoriesRequest = gql`
  {
    articles {
      categories
    }
  }
`;
