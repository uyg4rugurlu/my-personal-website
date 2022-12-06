import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = (language = "en") =>
  join(process.cwd(), `src/assets/posts/${language}`);

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory());
}

export function getPostBySlug({ slug, fields = [], language }) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory(language), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const postFields = {};

  fields.forEach((field) => {
    if (field === "content") {
      postFields[field] = content;
    } else if (data[field]) {
      postFields[field] = data[field];
    }
  });

  return postFields;
}

export function getAllPosts({ fields = [] }) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug({ slug, fields }))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export const getSlugWithLanguage = (oldLanguage, newLanguage) => {};
