import allPosts from "../app/blogs/post";

export default () => {
  const posts = allPosts().map((post) => ({
    url: `https://ayushtomar.tech/blogs/${post.slug}`,
    lastModified: post.metadata?.publishedAt,
  }));

  const routes = ["", "/about", "/projects", "/blogs"].map((route) => ({
    url: `https://ayushtomar.tech/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
};
