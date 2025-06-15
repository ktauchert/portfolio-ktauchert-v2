import { defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
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
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "link",
      title: "Live Demo Link",
      type: "url",
    },
    {
      name: "githubLink",
      title: "GitHub Repository Link",
      type: "url",
    },
    {
      name: "problem",
      title: "Problem & Background",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "role",
      title: "Your Role",
      type: "string",
    },
    {
      name: "duration",
      title: "Project Duration",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "challenges",
      title: "Challenges & Solutions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "challenge",
              title: "Challenge",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "Heading 1", value: "h1" },
                    { title: "Heading 2", value: "h2" },
                    { title: "Heading 3", value: "h3" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Numbered", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Bold", value: "strong" },
                      { title: "Italic", value: "em" },
                      { title: "Underline", value: "underline" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          {
                            name: "href",
                            type: "url",
                            title: "URL",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: "solution",
              title: "Solution",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "Heading 1", value: "h1" },
                    { title: "Heading 2", value: "h2" },
                    { title: "Heading 3", value: "h3" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Numbered", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Bold", value: "strong" },
                      { title: "Italic", value: "em" },
                      { title: "Underline", value: "underline" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          {
                            name: "href",
                            type: "url",
                            title: "URL",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "features",
      title: "Project Features",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
