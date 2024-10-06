import frontmatterBuilder from './builders/frontmatter-builder.js';
import '@accuser/svelte-unist';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { frontmatter } from 'micromark-extension-frontmatter';
export { frontmatterBuilder };
export const extensions = [frontmatter()];
export const mdastExtensions = [frontmatterFromMarkdown()];
