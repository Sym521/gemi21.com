export default async function Blog({
	params,
}: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const { default: Post } = await import(`@/post/${slug}.mdx`);

	return (
		<div>
			<Post />
		</div>
	);
}

// export function generateStaticParams() {
//     return [{ slug: 'sample' }, { slug: 'about' }]
// }

export const dynamicParams = true;
