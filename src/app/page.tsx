"use client";
import { useRef, useState } from "react";
import { Timer } from "./components/timer/timer";
import { PrimaryButton } from "./components/button/primary-button";
import Image from "next/image";

export default function Home() {
  const [currentTimerState, setCurrentTimerState] = useState(false);
  const handleTimerState = () => {
    setCurrentTimerState(!currentTimerState);
  };
  return (
    <main className="flex flex-col  items-center justify-between">
      <Image
        src="https://i.imgur.com/cUJJeCT.gif"
        width={1080}
        height={720}
        alt="cyberpunk background"
        className="background-image-punk"
      />
      <div className="mt-6 mx-auto flex items-center justify-center flex-col">
        <section>
          <Timer isActive={currentTimerState} />
        </section>
        <section>
          <PrimaryButton
            text={currentTimerState ? "Pause" : "Start"}
            click={handleTimerState}
          />
        </section>
      </div>
      <iframe
        style={{
          borderRadius: "12px",
          marginTop: "2rem",
        }}
        src="https://open.spotify.com/embed/playlist/4eWBwGl0c5wtp6k5Krp6My?utm_source=generator"
        width="50%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowTransparency={true}
      ></iframe>
    </main>
  );
}
