import { PostWithUserType } from "../types/type";
import Post from "./Post";

type PostProps = {
  posts: PostWithUserType[];
};
const Posts = (props: PostProps) => {
  const { posts } = props;
  return (
    <div className="max-w-3xl mx-auto flex flex-col space-y-10 p-5">
      <div className="text-2xl font-bold border-b-2 sticky top-0 bg-white z-10 py-2">
        Posts
      </div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
