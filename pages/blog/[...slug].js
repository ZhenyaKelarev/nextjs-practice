import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Blog posts Page</h1>
    </div>
  );
};
export default BlogPostsPage;
