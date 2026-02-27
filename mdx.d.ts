declare module "*.mdx" {
  import { ComponentType } from "react";
  import { MDXProps } from "mdx/types";
  const MDXComponent: ComponentType<MDXProps>;
  export default MDXComponent;
}
