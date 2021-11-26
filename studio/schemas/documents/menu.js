export default {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "string", name: "link", title: "Link" }],
    },
  ],
};
