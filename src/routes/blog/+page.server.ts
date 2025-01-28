import type { Blog } from '$lib/types/generic.types';

async function getBlogs() {
    const blogs: Blog[] = [];

    const paths = import.meta.glob('../../content/blog/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Blog, 'slug'>;
            const b = { ...metadata, slug } satisfies Blog;
            // only get published blogs
            if (b.published) {
                blogs.push(b);
            }
        }
    }

    blogs.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return blogs;
}

export const load = async () => {
    const blogs = await getBlogs();
    return { blogs };
};
