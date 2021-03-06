// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import news from "./documents/news";
import page from "./documents/page";
import footer from "./documents/footer";
import menu from "./documents/menu";

import portableText from "./fields/portableText";
import pageRef from "./fields/pageRef";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    news,
    page,
    portableText,
    pageRef,
    footer,
    menu,

    /* Your types here! */
  ]),
});
