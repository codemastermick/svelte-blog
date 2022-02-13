import { GraphQLClient } from 'graphql-request';
import { gql, request } from 'graphql-request';

export const client = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_ENDPOINT as string, {
  headers: {}
});

export const getBlogRoll = async (): Promise<Partial<PostMetadata>> => {
  try {
    const res = await client.request(gql`
      {
        articles {
          title
          publishDate
          slug
        }
      }
    `);
    return res.articles;
  } catch (error) {
    console.log(error);
  }
};

export const getArticle = async (slug: string): Promise<PostMetadata> => {
  const res = await request(
    import.meta.env.VITE_GRAPHCMS_ENDPOINT as string,
    gql`
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
    `,
    { slug }
  );
  return res.article;
};

export const FetchCategories = gql`
  {
    articles {
      categories
    }
  }
`;
