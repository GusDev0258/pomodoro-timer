"use client";
import { useEffect, useRef, useState } from "react";
import "./timer.css";
export type TimerProps = {
  isActive: boolean;
};
export function Timer(props: TimerProps) {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const interval = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (!props.isActive) {
      setMinutes(25);
      setSeconds(0);
    }
  }, [minutes, seconds]);

  useEffect(() => {
    if (props.isActive) {
      interval.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval.current);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(interval.current);
    }
  }, [props.isActive, minutes, seconds]);

  return (
    <div className="flex items-center flex-1 gap-2 text-[10rem] md:text-[16rem] lg:text-[20rem] timer-container">
      <div>{minutes < 10 ? "0" + minutes : minutes}</div>
      <span>:</span>
      <div>{seconds >= 10 ? seconds : "0" + seconds}</div>
    </div>
  );
}
