export default {
  name: "page",
  title: "Sider for Elmera",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageId",
      title: "Page ID",
      type: "slug",
      validation: (Rule) => Rule.required(),
    },
  ],
};
