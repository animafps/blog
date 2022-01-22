import type { URL } from "url";

export interface MarkdownFrontmatter {
  date: string;
  title: string;
  description: string;
  file: URL;
  draft: boolean;
}
