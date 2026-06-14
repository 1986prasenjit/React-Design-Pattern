t’s a great question because, on the surface, setCount(count + 1) looks like it does the exact same thing, but it’s actually a hidden trap.
To understand why the functional update—setCount((prevCount) => prevCount + 1)—is the gold standard, we have to look at how React handles updates under the hood.
Here is the breakdown of why this is best practice, explained simply.
1. React State Updates are Batched (The "Restaurant" Analogy)
Imagine you are at a restaurant. Instead of running to the kitchen every single time you ask for water, an extra fork, or a napkin, the waiter takes your entire order at once and delivers it together.
React does the same thing. For performance reasons, it batches multiple state updates together and runs them at the end of an event handler.
The Problem with setCount(count + 1)
Because React batches updates, the value of count doesn't change instantly when you call setCount. It stays exactly what it was when the function started.
Look at this example:
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};

If count starts at 0, you might expect this to result in 3. But it actually results in 1.
Why? Because React looks at it like this:
•	First call: setCount(0 + 1) ‭$\rightarrow$‬ React notes down: "Target is 1"
•	Second call: setCount(0 + 1) ‭$\rightarrow$‬ React notes down: "Target is 1"
•	Third call: setCount(0 + 1) ‭$\rightarrow$‬ React notes down: "Target is 1"
Since count hasn't actually updated on the screen yet, every single call is reading the old, stale value of 0.
2. The Solution: The "Assembly Line" (Functional Updates)
When you use setCount((prevCount) => prevCount + 1), you aren't passing a finished number anymore. Instead, you are passing a recipe or a set of instructions.
Let's look at the exact same scenario using the best practice:
const handleClick = () => {
  setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1);
};

React now treats this like an assembly line queue:
	1.	First instruction: "Hey React, I don't know what the current number is right now, but whatever it is, add 1 to it." (0 + 1 = 1)
	2.	Second instruction: "Now take the result of that last step, and add 1 to it." (1 + 1 = 2)
	3.	Third instruction: "Now take the result of that step, and add 1 to it." (2 + 1 = 3)
By using the prevCount argument, React guarantees that you are always working with the absolute newest, most up-to-date state from the previous line, even before that state has been rendered to the screen.
3. The "Stale Closures" Trap (Asynchronous Code)
The batching issue gets even worse when you introduce asynchronous code, like a setTimeout or an API fetch.
const handleClick = () => {
  setTimeout(() => {
    setCount(count + 1); 
  }, 3000);
};

If a user clicks that button 5 times quickly, count will only increase by 1. This is because the count variable inside that setTimeout gets "locked in" (or closed over) at the exact moment the button was clicked. It has no idea that the button was clicked four more times while it was waiting.
Using setCount(prev => prev + 1) completely bypasses this issue because it doesn't care about the locked-in variable; it always grabs the latest value directly from React's internal vault at the exact millisecond the update executes.
Summary Checklist
Approach	Uses Stale Data?	Safe in Async/Loops?	Safe for Multiple Updates?
setCount(count + 1)	⚠️ Yes (Reads current render's snapshot)	❌ No	❌ No
setCount(prev => prev + 1)	✅ No (Always fetches live value)	✅ Yes	✅ Yes
Rule of thumb: Whenever your new state depends entirely on what the old state was (like toggling a boolean, adding to a counter, or appending an item to an array), always use the functional callback approach. It protects your code against asynchronous bugs and batching issues.