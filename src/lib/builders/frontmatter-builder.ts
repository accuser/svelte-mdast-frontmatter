import { isYaml } from '@accuser/mdast-util-type-guards';
import { parse } from 'yaml';

const frontmatterFrom = (root: import('mdast').Root) => {
	if (root.children.length > 0 && isYaml(root.children[0])) {
		try {
			return parse(root.children[0].value);
		} catch {}
	}
};

export default (root: import('mdast').Root | undefined) => {
	if (root === undefined) return () => undefined;

	let frontmatter = frontmatterFrom(root);

	return () => frontmatter;
};
