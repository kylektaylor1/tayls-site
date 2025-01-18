import {
    relations,
    type InferInsertModel,
    type InferSelectModel
} from 'drizzle-orm';
import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core';

const baseColumns = {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    createdAt: int('created_at', { mode: 'timestamp_ms' })
        .notNull()
        .$defaultFn(() => new Date()),
    deletedAt: int('deleted_at', { mode: 'timestamp_ms' })
};

export const projectTable = sqliteTable('project', {
    ...baseColumns,
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
    ...baseColumns,
    name: text('name').notNull().unique(),
    type: text({ enum: ['SKILL', 'BLOG'] }).notNull()
});

export const tagTableRelations = relations(tagTable, ({ many }) => ({
    projectTags: many(projectTagTable)
}));

export const projectTagTable = sqliteTable('project_tag', {
    ...baseColumns,
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

export const contactTable = sqliteTable('contact', {
    ...baseColumns,
    name: text('text'),
    email: text('text'),
    message: text('text')
});
export type BaseContact = InferSelectModel<typeof contactTable>;
export type BaseInsertContact = InferInsertModel<typeof contactTable>;
