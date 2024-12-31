import { relations } from 'drizzle-orm';
import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core';

export const projectTable = sqliteTable('project', {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    callouts: text('callouts', { mode: 'json' }).$type<string[]>(),
    url: text('url'),
    urlType: text('url_type', { enum: ['GITHUB', 'GOOGLE_DOC', 'EXTERNAL'] }),
    blogId: text('blog_id')
});

export const projectTableRelations = relations(
    projectTable,
    ({ one, many }) => ({
        projectTags: many(projectTagTable)
    })
);

export const tagTable = sqliteTable('tag', {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text('name').notNull().unique(),
    type: text({ enum: ['SKILL', 'BLOG'] }).notNull()
});

export const tagTableRelations = relations(tagTable, ({ many }) => ({
    projectTags: many(projectTagTable)
}));

export const projectTagTable = sqliteTable('project_tag', {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    projectId: int('project_id', { mode: 'number' }).references(
        () => projectTable.id
    ),
    tagId: int('tag_id', { mode: 'number' }).references(() => tagTable.id)
});

export const projectTagTableRelations = relations(
    projectTagTable,
    ({ one }) => ({
        tag: one(tagTable, {
            fields: [projectTagTable.tagId],
            references: [tagTable.id]
        }),
        project: one(projectTable, {
            fields: [projectTagTable.projectId],
            references: [projectTable.id]
        })
    })
);
