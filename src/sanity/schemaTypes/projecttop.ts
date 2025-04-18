import { defineType } from "sanity";

export default defineType({
  name: "projecttop",
  title: "Project Top",
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
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
});
