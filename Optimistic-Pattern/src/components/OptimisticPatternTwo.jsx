import { startTransition, useOptimistic, useState } from "react";

function OptimisticPatternTwo({ postId, initailValue = 0 }) {
  const [likes, setLikes] = useState(initailValue);

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, increaseNumber) => currentLikes + increaseNumber
  );

  async function sendLikesToServe(postId) {
    await new Promise((res) => setTimeout(res, 1000));


    if(Math.random() < 0.2){
        throw new Error("Likes Failed");
    }

    console.log(`Sending Likes to the Server ${postId}`);

    return { success: true };
  }

  async function likesHandler() {
    addOptimisticLike(1);

    try {
      await sendLikesToServe(postId);
      setLikes((prevLikes)=> prevLikes + 1)
    } catch (error) {
      console.log("Failed to Like", error);

      setLikes((prevLikes)=> prevLikes)
    }
  }
  return (
    <>
      <h1>{optimisticLikes}</h1>
      <button onClick={() => startTransition(() => likesHandler())}>❤️</button>
    </>
  );
}

export default OptimisticPatternTwo;
