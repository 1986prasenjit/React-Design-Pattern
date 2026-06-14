import { useOptimistic, useState, startTransition } from "react";
const OptimisticPattern = ({ post, initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, delta) => {
      return currentLikes + delta;
    }
  );

  const sendLikesToServer = async (post) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (Math.random() < 0.2) {
      throw new Error("Likes Failed");
    }

    console.log("Likes sent to server", post);
    return { success: true };
  };

  const handleLikes = async () => {
    addOptimisticLike(1);

    try {
      await sendLikesToServer(post);
      setLikes((prevLikes) => prevLikes + 1);
    } catch (error) {
      console.log("Likes Failed", error);
      setLikes((prevLikes) => prevLikes);
    }
  };

  return (
    <>
      <h1>{optimisticLikes}</h1>
      <button onClick={() => startTransition(() => handleLikes())}>❤️</button>
    </>
  );
};

export default OptimisticPattern;
