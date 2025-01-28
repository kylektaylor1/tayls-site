export type Project = {
    title: string;
    description: string;
    callouts: string[];
    company?: string;
    type: 'PERSONAL' | 'PROFESSIONAL';
    ghLink?: string;
    siteUrl?: string;
    tech: string[];
};

export type BlogCategoryOptions = 'TECH' | 'PERSONAL' | 'ESPORTS';

export type Blog = {
    title: string;
    author: string;
    slug: string;
    description: string;
    date: string;
    categories: BlogCategoryOptions[];
    published: boolean;
};
