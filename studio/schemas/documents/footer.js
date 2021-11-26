export default {
  name: "footer",
  title: "Footer",
  type: "document",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "string", name: "link", title: "Link" }],
    },
  ],
};
