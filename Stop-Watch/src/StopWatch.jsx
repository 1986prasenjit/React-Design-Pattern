import { useRef, useState } from "react"
const StopWatch = () => {
   const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
   }) 

   function startTimer() {
    if(timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
        setTime((prevTime) => {
            let { hours, minutes, seconds, miliseconds } = prevTime;

            miliseconds += 1;

            if (miliseconds === 100) {
                seconds += 1;
                miliseconds = 0;
            }
            
            if (seconds === 60) {
                minutes += 1;
                seconds = 0;
            }

            if (minutes === 60) {
                hours += 1;
                minutes = 0;
            }

            return { hours, minutes, seconds, miliseconds };
        });
    }, 10);
   }

   function stopTimer() {
    if(timerRef.current === null) return;
    
    clearInterval(timerRef.current);
    timerRef.current = null;
   }

   function resetTimer() {
    stopTimer();
    setTime({ hours: 0, minutes: 0, seconds: 0, miliseconds: 0 });
   }

   const includeZero = (value) => value < 10 ? `0${value}` : value;

  const timerRef = useRef(null)
  return (
    <div>
         <h1 className="text-3xl font-bold text-center mt-10">{includeZero(time.hours)}:{includeZero(time.minutes)}:{includeZero(time.seconds)}:{includeZero(time.miliseconds)}</h1>
         <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={startTimer}>Start</button>
         <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={stopTimer}>Stop</button>
         <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default StopWatch