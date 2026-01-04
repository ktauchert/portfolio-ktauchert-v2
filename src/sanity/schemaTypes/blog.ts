import { defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "lang",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "German", value: "de" },
        ],
        layout: "radio",
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "A short description of the blog post (for previews)",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
        {
          type: "object",
          name: "codeBlock",
          title: "Code Block",
          fields: [
            {
              name: "language",
              title: "Language",
              type: "string",
              options: {
                list: [
                  { title: "JavaScript", value: "javascript" },
                  { title: "TypeScript", value: "typescript" },
                  { title: "HTML", value: "html" },
                  { title: "CSS", value: "css" },
                  { title: "Python", value: "python" },
                  { title: "JSON", value: "json" },
                  { title: "Bash", value: "bash" },
                  { title: "SQL", value: "sql" },
                ],
              },
              initialValue: "javascript",
            },
            {
              name: "filename",
              title: "Filename (optional)",
              type: "string",
            },
            {
              name: "code",
              title: "Code",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              language: "language",
              filename: "filename",
              code: "code",
            },
            prepare(selection) {
              const { language, filename, code } = selection;
              return {
                title: filename || `${language} code`,
                subtitle:
                  code?.substring(0, 50) + (code?.length > 50 ? "..." : ""),
              };
            },
          },
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
    },
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lang",
      media: "featuredImage",
      isPublished: "isPublished",
    },
    prepare(selection) {
      const { title, subtitle, media, isPublished } = selection;
      return {
        title,
        subtitle: `${subtitle?.toUpperCase()} - ${
          isPublished ? "Published" : "Draft"
        }`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Published Date (Newest)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published Date (Oldest)",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "Updated Date (Newest)",
      name: "updatedAtDesc",
      by: [{ field: "updatedAt", direction: "desc" }],
    },
    {
      title: "Updated Date (Oldest)",
      name: "updatedAtAsc",
      by: [{ field: "updatedAt", direction: "asc" }],
    },
  ],
});
