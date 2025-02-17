import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type Post = {
    slug: string;
    title: string;
    description: string;
};

const getPosts = (): Post[] => {
    const postsDirectory = path.join(process.cwd(), 'post');
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        return {
            slug: filename.replace('.mdx', ''),
            title: data.title || 'No title',
            description: data.description || 'No description',
        };
    });
};

const BlogHome = () => {
    const posts = getPosts();

    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold mb-4">Articles</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug} className="mb-6">
                        <Link href={`/Blog/${post.slug}`} className="text-2xl font-semibold text-blue-600 hover:underline">
                            
                                {post.title}
                            
                        </Link>
                        <p className="text-gray-600">{post.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default BlogHome;
