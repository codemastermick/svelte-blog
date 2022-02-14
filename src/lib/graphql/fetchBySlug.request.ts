import { gql } from 'graphql-request';

export const fetchBySlug = gql`
  query FetchFull($slug: String!) {
    article(where: { slug: $slug }) {
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
