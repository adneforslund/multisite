export default {
  name: "News",
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
      description: "Which page this article belongs to",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "portableText",
      type: "portableText",
      title: "Rich text",
    },
  ],
};
