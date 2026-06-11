declare module "tailwindcss/lib/util/flattenColorPalette";

declare module "*.mdx" {
	export const postData: {
		title: string;
		description: string;
		date: string;
	};

	const MDXContent: (props: Record<string, unknown>) => JSX.Element;
	export default MDXContent;
}
