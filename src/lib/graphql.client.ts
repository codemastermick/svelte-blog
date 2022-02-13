import { GraphQLClient } from 'graphql-request';
import { request } from 'graphql-request';
import { blogRoll } from './graphql/blogRoll.request';
import { categoriesRequest } from './graphql/categories.request';
import { getArticlesByTag } from './graphql/fetchByCategory.request';
import { fetchBySlug } from './graphql/fetchBySlug.request';
import { fullFetch } from './graphql/fullFetch.request';

const ENDPOINT = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

const client = new GraphQLClient(ENDPOINT as string, {
  headers: {}
});

export const getBlogRoll = async (): Promise<Partial<PostMetadata>> => {
  try {
    const res = await client.request(blogRoll);
    return res.articles;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleBySlug = async (slug: string): Promise<PostMetadata> => {
  const res = await request(ENDPOINT, fetchBySlug, { slug });
  return res.article;
};

export const getCategories = async (): Promise<string[]> => {
  try {
    const res = await client.request(categoriesRequest);
    const articles = res.articles;
    let found = [];
    articles.forEach((article: Partial<PostMetadata>) => {
      found = [...found, ...article.categories];
    });
    return [...new Set(found)];
  } catch (error) {
    console.log(error);
  }
};

export const fetchFull = async (): Promise<Partial<PostMetadata[]>> => {
  try {
    const res = await client.request(fullFetch);
    return res.articles;
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesByCategory = async (category: string): Promise<PostMetadata> => {
  const res = await request(ENDPOINT, getArticlesByTag, { categories: [category] });
  return res.articles;
};
