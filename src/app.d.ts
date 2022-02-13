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

interface PostMetadata {
  author: AuthorMetadata;
  title: string;
  publishDate: string;
  updatedAt: string | undefined | null;
  excerpt: string;
  categories: string[];
  slug: string;
  body: string;
}

interface AuthorMetadata {
  name: string;
  email: string;
  avatarURL: string;
}
