import { gql } from 'graphql-request';

export const fetchBySlug = gql`
  query FetchFull($slug: String!) {
    article(where: { slug: $slug }) {
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
