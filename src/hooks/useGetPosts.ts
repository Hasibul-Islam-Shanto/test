import { useEffect, useState } from "react";
import { API } from "../utis/axios";
import { PostType } from "../types/type";

const useGetPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const { data } = await API.get("/posts");
        setPosts(data);
      } catch (error) {
        setLoading(false);
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);
  return { posts, loading, error };
};
export default useGetPosts;
