import { defineType } from "sanity";


export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: 'lang',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'German', value: 'de' },
        ],
        layout: 'radio',
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
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
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
});