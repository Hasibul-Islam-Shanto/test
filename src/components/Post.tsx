import { PostWithUserType } from "../types/type";
import Avatar from "./Avatar";

type PostProps = {
  post: PostWithUserType;
};

const Post = (props: PostProps) => {
  const { post } = props;
  return (
    <div className="flex flex-col items-start justify-start space-y-2 p-5 border-[1px] border-gray-400 hover:shadow-md">
      <div className="flex items-center gap-x-2">
        <Avatar />
        <h3 className="text-lg text-gray-700 font-bold">{post.user?.name}</h3>
      </div>
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-md text-gray-600">{post.body}</p>
    </div>
  );
};

export default Post;
