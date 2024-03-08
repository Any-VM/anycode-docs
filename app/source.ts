import { map } from "@/.map";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
const frontmatterSchema = defaultSchemas.frontmatter
export const {
  getPage,
  getPages,
  pageTree,
} = loader({
  source: createMDXSource(map, { schema: { frontmatter: frontmatterSchema } }),
});
