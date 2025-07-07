import path from "path";
import Link from "next/link";
import { Separator } from "../_components/ui/separator";

type Post = {
	slug: string;
	title: string;
	description: string;
	date: string;
};

const getPosts = async (): Promise<Post[]> => {
	const postsDirectory = path.join(process.cwd(), "post");
	const filenames = (await import("fs/promises")).readdir(postsDirectory);

	const posts = (await filenames).filter((filename) =>
		filename.endsWith(".mdx"),
	);

	const postDataList = await Promise.all(
		posts.map(async (filename) => {
			const slug = path.basename(filename, ".mdx");
			// 動的importでmdxファイルからpostDataを取得
			const mod = await import(`../../post/${slug}.mdx`);
			const { title, description, date } = mod.postData;
			return { slug, title, description, date };
		}),
	);

	return postDataList;
};

const BlogHome = async () => {
	const posts = await getPosts();

	return (
		<main className="mt-4">
			<h1 className="mt-4 text-4xl md:text-7xl inline-block font-bold text-left bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
				Articles
			</h1>
			<Separator className="my-2" />
			<div>
				<ul>
					{posts.map((post) => (
						<li
							key={post.slug}
							className="mb-4 p-1 hover:border border-slate-300 delay-75 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
						>
							<Link
								href={`/Blog/${post.slug}`}
								className="block p-1 font-noto_sans_jp"
							>
								<h2 className="text-2xl font-semibold text-blue-700">
									{post.title}
								</h2>
								<div>
									<p className="text-slate-600">
										{post.date} | {post.description}
									</p>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
};

export default BlogHome;
