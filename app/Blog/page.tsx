import Link from "next/link";
import { postData as tuatEntranceExamPostData } from "../../post/tuatEntranceExam.mdx";
import { Separator } from "../_components/ui/separator";

type Post = {
	slug: string;
	title: string;
	description: string;
	date: string;
};

const posts: Post[] = [
	{
		slug: "tuatEntranceExam",
		...tuatEntranceExamPostData,
	},
];

const BlogHome = () => {
	return (
		<main className="mt-4">
			<h1 className="text-5xl md:text-7xl inline-block font-bold text-left text-blue-900">
				Articles
			</h1>
			<Separator className="my-2" />
			<div className="font-Zen_Kaku_Gothic_New">
				<ul>
					{posts.map((post) => (
						<li
							key={post.slug}
							className="mb-4 p-1 hover:border border-slate-300 delay-75 rounded-md transition-transform duration-100 ease-in-out transform hover:scale-[1.02]"
						>
							<Link
								href={`/Blog/${post.slug}`}
								className="block p-1 font-Noto_Sans_JP"
							>
								<h2 className="text-2xl font-bold text-blue-600">
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
