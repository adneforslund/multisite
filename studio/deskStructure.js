import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .id("base")
    .title("Content")
    .items([
      S.listItem({
        id: "news-by-page",
        title: "News by page",
        schemaType: "news",
        child: () =>
          S.documentTypeList("page").child((pageId) =>
            S.documentTypeList("news")
              .title("News by page")
              .filter("_type == $type && pageRef._ref == $pageId")
              .params({ type: "news", pageId })
              .initialValueTemplates([
                S.initialValueTemplateItem("news-by-page", { pageId }),
              ])
          ),
      }),
      ...S.documentTypeListItems(),
    ]);
