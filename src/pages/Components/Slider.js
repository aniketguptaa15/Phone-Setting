import React, { useState } from "react";

export default function Slider() {
  const [volume, setVolume] = useState(40);

  return (
    <div>
      <main className="py-2">
        <section>
          <input
            type="range"
            id="volumeSlider"
            min={0}
            max={100}
            step={0.02}
            value={volume}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
            className="w-80 ml-2 mb-4"
          />
        </section>
      </main>
    </div>
  );
}
