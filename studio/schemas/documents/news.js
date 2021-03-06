export default {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageRef",
      type: "pageRef",
      title: "Page",
    },
    {
      name: "portableText",
      type: "portableText",
      title: "Rich text",
    },
  ],
};
