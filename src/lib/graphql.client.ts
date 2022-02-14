import { GraphQLClient, request } from 'graphql-request';
import { blogRoll } from './graphql/blogRoll.request';
import { categoriesRequest } from './graphql/categories.request';
import { getArticlesByTag } from './graphql/fetchByCategory.request';
import { fetchBySlug } from './graphql/fetchBySlug.request';
import { fullFetch } from './graphql/fullFetch.request';

// const { GRAPHCMS_TOKEN } = process.env;
// console.log(GRAPHCMS_TOKEN);

interface ErrorResponse {
  status: number;
  message: string;
}

const ENDPOINT = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

const client = new GraphQLClient(ENDPOINT as string, {
  // headers: { Authorization: `Bearer ${GRAPHCMS_TOKEN}` }
});

export const getBlogRoll = async (): Promise<Partial<PostMetadata> | ErrorResponse> => {
  try {
    const res = await client.request(blogRoll);
    return res.articles;
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};

export const getArticleBySlug = async (slug: string): Promise<PostMetadata | ErrorResponse> => {
  try {
    const res = await request(ENDPOINT, fetchBySlug, { slug });
    return res.article;
  } catch (error) {
    return {
      status: 404,
      message: 'Article not found!'
    };
  }
};

export const getCategories = async (): Promise<string[] | ErrorResponse> => {
  try {
    const res = await client.request(categoriesRequest);
    const articles = res.articles;
    let found = [];
    articles.forEach((article: Partial<PostMetadata>) => {
      found = [...found, ...article.categories];
    });
    return [...new Set(found)];
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};

export const fetchFull = async (): Promise<Partial<PostMetadata[] | ErrorResponse>> => {
  try {
    const res = await client.request(fullFetch);
    return res.articles;
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};

export const getArticlesByCategory = async (
  tag: string
): Promise<PostMetadata[] | ErrorResponse> => {
  try {
    const res = await request(ENDPOINT, getArticlesByTag, { tag });
    return res.articles;
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};
