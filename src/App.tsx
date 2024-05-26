import { useMemo } from "react";
import useGetPosts from "./hooks/useGetPosts";
import useGetUsers from "./hooks/useGetUsers";
import Posts from "./components/Posts";
import { PostWithUserType } from "./types/type";

const App = () => {
  const { posts, loading: isPostLoading, error: postError } = useGetPosts();
  const { users, loading: isUserLoading, error: userError } = useGetUsers();

  const postsListWithUser: PostWithUserType[] = useMemo(() => {
    const postsWithUserContainer = posts
      .sort((a, b) => b.id - a.id)
      .map((post) => {
        const user = users.find((user) => user.id === post.userId);
        return { ...post, user };
      });
    return postsWithUserContainer;
  }, [posts, users]);

  if (isPostLoading || isUserLoading) {
    return <div>Loading...</div>;
  }

  if (postError || userError) {
    return (
      <div className="flex justify-center items-center text-lg text-red-500">
        {postError || userError}
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Posts posts={postsListWithUser} />
    </div>
  );
};

export default App;
