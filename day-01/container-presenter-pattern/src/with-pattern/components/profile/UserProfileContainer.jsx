import { useState, useEffect } from "react";
import UserProfilePresenter from "./UserProfilePresenter";

const UserProfileContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
      );

      const data = await response.json();

      setUser(data);
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}/posts`,
      );

      const data = await response.json();

      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts");
      // Don't set loading to false here, posts are secondary
    }
  };

  const handleUpdateUser = async (updatedUserData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        },
      );
      setUser(response.data);
      return { success: true };
    } catch (err) {
      return { success: false, error: "Failed to update profile" };
    }
  };

  const handleRetry = () => {
    fetchUserData();
  };

  return (
    <UserProfilePresenter
      user={user}
      posts={posts}
      loading={loading}
      error={error}
      onUpdateUser={handleUpdateUser}
      onRetry={handleRetry}
    />
  );
};

export default UserProfileContainer;
