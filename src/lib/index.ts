import frontmatterBuilder from '$lib/builders/frontmatter-builder.js';
import '@accuser/svelte-unist';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { frontmatter } from 'micromark-extension-frontmatter';

declare module '@accuser/svelte-unist' {
	export interface Context {
		getFrontmatter(): ReturnType<typeof frontmatterBuilder>;
	}
}

export { frontmatterBuilder };

export const extensions = [frontmatter()];

export const mdastExtensions = [frontmatterFromMarkdown()];
