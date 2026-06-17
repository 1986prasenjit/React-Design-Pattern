import { useState, useOptimistic, useTransition } from "react";

const OptimisticPattern = ({ postId, initialValue = 0 }) => {
  const [likes, setLikes] = useState(initialValue);
  const [isPending, startTransition] = useTransition();

  const [optimisticLikes, addOptimisticLikes] = useOptimistic(
    likes,
    (currentValue, increaseValue) => currentValue + increaseValue,
  );

  async function likesHandler(){
    addOptimisticLikes(1);

    try {
      await new Promise((r)=> setTimeout(r, 2000));

      if(Math.random() < 0.2){
        throw new Error("Something went wrong");
      }

      console.log("Sending likes to the Server", postId);

      setLikes((prevLikes) => prevLikes + 1);
      
    } catch (error) {
      console.error(`Failed to call Likes ${error}`);

      setLikes((prevLikes) => prevLikes);
    }
  }

  return (
    <div>
      <h1>Optimistic Pattern</h1>
      <p>The count of Likes is {optimisticLikes}</p>
      <button 
        disabled={isPending} 
        onClick={() => startTransition(likesHandler)}
      >
        {isPending ? "⏳" : "❤️"}
      </button>
    </div>
  );
};

export default OptimisticPattern;
