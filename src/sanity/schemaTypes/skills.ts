import { defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
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
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
