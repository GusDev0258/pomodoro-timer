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
  const [isOnBreak, setIsOnBreak] = useState<boolean>(false);

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
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval.current);
        setIsOnBreak(!isOnBreak);
        if (isOnBreak) {
          setMinutes(25);
          setSeconds(0);
        } else {
          setMinutes(5);
          setSeconds(0);
        }
      }
      return () => clearInterval(interval.current);
    }
  }, [props.isActive, minutes, seconds]);

  return (
    <div className="flex items-center gap-2 sm:text-[6rem] text-[2rem] md:text-[12rem] lg:text-[16rem] timer-container p-24">
      <span>{minutes < 10 ? "0" + minutes : minutes}</span>
      <span>:</span>
      <span>{seconds >= 10 ? seconds : "0" + seconds}</span>
    </div>
  );
}
