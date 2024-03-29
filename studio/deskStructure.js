import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Innhold for sider")
        .child(
          S.documentTypeList("page").child((pageId) =>
            S.list()
              .title("Innhold")
              .items([
                S.listItem()
                  .title("Nyhter")
                  .child(
                    S.documentTypeList("news")
                      .title("News by page")
                      .filter("_type == $type && pageRef._ref == $pageId")
                      .params({ type: "news", pageId })
                      .initialValueTemplates([
                        S.initialValueTemplateItem("news-by-page", { pageId }),
                      ])
                  ),
                S.listItem()
                  .title("Footer")
                  .child(
                    S.document()
                      .schemaType("footer")
                      .documentId(`footer-${pageId}`)
                  ),
                S.listItem()
                  .title("Meny")
                  .child(
                    S.document().schemaType("menu").documentId(`menu-${pageId}`)
                  ),
              ])
          )
        ),

      /* S.listItem({
        id: "pages",
        title: "Pages",
        child: () =>
          S.documentTypeList("page").child((pageId) =>
            S.documentTypeList("news")
              .title("Content by page")
              .filter("_type == $type && pageRef._ref == $pageId")
              .params({ type: "news", pageId })
              .initialValueTemplates([
                S.initialValueTemplateItem("news-by-page", { pageId }),
              ])
          ),
      }),*/
      ...S.documentTypeListItems().filter(
        (listItem) => !["news", "footer", "menu"].includes(listItem.getId())
      ),
    ]);
