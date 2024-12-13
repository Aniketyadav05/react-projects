import React, { useState, useRef, useEffect } from 'react'

const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTIme, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null)
    const startTImeRef = useRef(0)
    useEffect(() => {
        if(isRunning){
            intervalIdRef.current=  setInterval(() =>{
                setElapsedTime(Date.now() - startTImeRef.current)
            },10)
        }
        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning])

    function start() {
        setIsRunning(true)
        startTImeRef.current = Date.now() - elapsedTIme;
        console.log(startTImeRef.current)

    }
    function stop() {
        setIsRunning(false)

    }

    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTIme() {

        let minutes = Math.floor(elapsedTIme/ (1000*60)%60)
        let seconds = Math.floor(elapsedTIme/ (1000)%60)
        let milliseconds = Math.floor((elapsedTIme % 1000)/10)

        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")
        return `${minutes}:${seconds}:${milliseconds}`

    }
    return (

        <div className='place-items-center justify-center border-4 rounded-md border-teal-300 text-white ml-[30%] p-8 h-64 w-80 '>
            <div className='font-extrabold text-3xl  mb-4'>{formatTIme()}</div>
            <div className='flex-col justify-between space-x-5 mb-4'>
                <button onClick={start} className="button-2 bg-green-500 hover:bg-green-400  font-extrabold">Start</button>
                <button onClick={reset} className="button-2 bg-blue-500 hover:bg-blue-400  font-extrabold">Reset</button>
                <button onClick={stop} className="button-2 bg-red-500 hover:bg-red-400  font-extrabold">Stop</button>
            </div>
        </div>
       
    )
}

export default StopWatch