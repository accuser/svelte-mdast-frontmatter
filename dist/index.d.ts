import frontmatterBuilder from './builders/frontmatter-builder.js';
import '@accuser/svelte-unist';
declare module '@accuser/svelte-unist' {
    interface Context {
        getFrontmatter(): ReturnType<typeof frontmatterBuilder>;
    }
}
export { frontmatterBuilder };
export declare const extensions: import('micromark-util-types').Extension[];
export declare const mdastExtensions: [
    import('mdast-util-from-markdown').Extension | import('mdast-util-from-markdown').Extension[]
];
