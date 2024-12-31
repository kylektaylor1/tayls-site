export interface Project {
    title: string;
    description: string;
    callouts: string[];
    company?: string;
    type: 'PERSONAL' | 'PROFESSIONAL';
    ghLink?: string;
    siteUrl?: string;
    tech: string[];
}
