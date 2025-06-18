import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Separator } from "../_components/ui/separator";

type Post = {
	slug: string;
	title: string;
	description: string;
};

const getPosts = (): Post[] => {
	const postsDirectory = path.join(process.cwd(), "post");
	const filenames = fs.readdirSync(postsDirectory);

	return filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContent = fs.readFileSync(filePath, "utf-8");
		const { data } = matter(fileContent);

		return {
			slug: filename.replace(".mdx", ""),
			title: data.title || "No title",
			description: data.description || "No description",
		};
	});
};

const BlogHome = () => {
	const posts = getPosts();

	return (
		<main className="mt-4">
			<h1 className="mt-4 text-4xl md:text-7xl inline-block font-bold text-left bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
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
							<Link href={`/Blog/${post.slug}`} className="block p-1">
								<h2 className="text-2xl font-semibold text-blue-600">
									{post.title}
								</h2>
								<p className="text-slate-600">{post.description}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
};

export default BlogHome;
