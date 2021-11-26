import T from "@sanity/base/initial-value-template-builder";

export default [
  ...T.defaults(),

  T.template({
    id: "news-by-page",
    title: "News by page",
    description: "Book by a specific author",
    schemaType: "news",
    parameters: [{ name: "pageId", type: "string" }],
    value: (params) => ({
      pageRef: { _type: "pageRef", _ref: params.pageId },
    }),
  }),
];
