import T from "@sanity/base/initial-value-template-builder";

export default [
  ...T.defaults(),

  T.template({
    id: "news-by-page",
    title: "News by page",

    schemaType: "news",
    parameters: [{ name: "pageId", type: "string" }],
    value: (params) => ({
      pageRef: { _type: "pageRef", _ref: params.pageId },
    }),
  }),
  T.template({
    id: "footer-by-page",
    title: "Footer by page",

    schemaType: "footer",
    parameters: [{ name: "pageId", type: "string" }],
    value: (params) => ({
      pageRef: { _type: "pageRef", _ref: params.pageId },
    }),
  }),
];
