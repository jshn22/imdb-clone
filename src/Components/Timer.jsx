import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Timer(){
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(()=>{
                setTimer(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [running])

    return(
        <div className="flex flex-col items-center gap-4">
            <Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">Back to Home</Link>
            <h1 className="">Timer Component</h1>
            <div className="text-3xl font-bold">Time: {timer} sec</div>
        <div className="flex gap-3">
        <button className="px-4 py-2 bg-yellow-600 text-white rounded" onClick={()=>{
            setTimer(0);
            setRunning(false);
        }}>Restart</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={()=> setRunning(true)}>Start</button>
        <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={()=> setRunning(false)}>Pause</button>
        </div>
        </div>
    )
}
export default Timer;