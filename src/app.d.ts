/* eslint-disable @typescript-eslint/no-empty-interface */
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
  interface Locals {}

  interface Platform {}

  interface Session {}

  interface Stuff {}
}

interface ImportMetaEnv {
  VITE_OWNER: string;
  VITE_SITENAME: string;
  VITE_GRAPHCMS_ENDPOINT: string;
}

interface GraphCMSAutoFields {
  id: string;
  createdAt: string;
  createdBy?: string;
  updatedAt: string;
  updatedBy?: string;
  publishedAt?: string;
  publishedBy?: string;
  scheduledIn?: string[];
}

interface CategoryData extends GraphCMSAutoFields {
  tag: string;
  articles: PostData[];
}

interface AuthorData extends GraphCMSAutoFields {
  name: string;
  email: string;
  avatarURL?: string;
  articles: PostData[];
}

interface PostData extends GraphCMSAutoFields {
  author: AuthorData;
  title: string;
  publishDate: string;
  excerpt: string;
  categories: CategoryData[];
  slug: string;
  body: string;
}
