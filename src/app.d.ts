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
  createdBy: string | undefined | null;
  updatedAt: string;
  updatedBy: string | undefined | null;
  publishedAt: string | undefined | null;
  publishedBy: string | undefined | null;
  scheduledIn: string[] | undefined | null;
}

interface AuthorMetadata extends GraphCMSAutoFields {
  name: string;
  email: string;
  avatarURL: string;
}

interface PostMetadata extends GraphCMSAutoFields {
  author: AuthorMetadata;
  title: string;
  publishDate: string;
  excerpt: string;
  categories: string[];
  slug: string;
  body: string;
}
