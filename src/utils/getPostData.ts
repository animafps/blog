import readingTime from "reading-time";

type Post = {
  title: string;
  file: URL;
  content: { source: string };
};

export default function getPostData(post: Post) {
  return {
    readingTime: readingTime(post.content.source).text,
  };
}
