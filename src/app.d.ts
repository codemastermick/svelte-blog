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
}

interface PostMetadata {
  author: string;
  authorAvatar: string | undefined;
  title: string;
  categories: string[];
  date: string;
  edited: string | undefined;
  excerpt: string;
  body: string;
}
