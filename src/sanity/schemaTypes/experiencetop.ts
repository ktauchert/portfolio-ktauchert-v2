import { defineType } from "sanity";

export default defineType({
  name: "experiencetop",
  title: "Experience Top",
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "since",
      title: "Since",
      type: "string",
    },
    {
      name: "countyears",
      title: "Count Years",
      type: "string",
    },
    {
      name: "countprojects",
      title: "Count Projects",
      type: "string",
    },
    {
      name: "countclients",
      title: "Count Clients",
      type: "string",
    },
    {
      name: "short",
      title: "Short",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
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
});
