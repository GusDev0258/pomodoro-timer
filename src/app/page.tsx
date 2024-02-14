"use client";
import { useState } from "react";
import { Timer } from "./components/timer/timer";
import { PrimaryButton } from "./components/button/primary-button";
import Image from "next/image";

export default function Home() {
  const [currentTimerState, setCurrentTimerState] = useState(false);
  const handleTimerState = () => {
    setCurrentTimerState(!currentTimerState);
  };

  return (
    <main className="flex flex-col  items-center justify-between p-24">
      <section>
        <Timer isActive={currentTimerState} />
      </section>
      <section>
        <PrimaryButton
          text={currentTimerState ? "Pause" : "Start"}
          click={handleTimerState}
        />
      </section>
    </main>
  );
}
