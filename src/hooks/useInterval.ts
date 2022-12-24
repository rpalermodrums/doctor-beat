import { useState, useEffect, useRef } from 'preact/hooks';

function useInterval(callback: () => void, delay: number | null) {
    const savedCallback: {current?: any} = useRef();

  // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

  // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default useInterval;
