import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/_post.svelte'
			},
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			]
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
