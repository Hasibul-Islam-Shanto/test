import { useEffect, useState } from "react";
import { API } from "../utis/axios";
import { UserType } from "../types/type";

const useGetUsers = () => {
  const [users, setusers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getusers = async () => {
      try {
        setLoading(true);
        const { data } = await API.get("/users");
        setusers(data);
      } catch (error) {
        setLoading(false);
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    getusers();
  }, []);
  return { users, loading, error };
};
export default useGetUsers;
