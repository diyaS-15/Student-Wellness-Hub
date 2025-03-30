"use client"; 

import { useState, useEffect } from "react";

const MoodTrackerSection = () => {
    const [mood, setMood] = useState<number>(10); //this the default mood


useEffect(() => {
    const fetchMood = async () => {
        const res = await fetch("/api/mood/route.ts");
        const data = await res.json();
        setMood(data.mood || 10);
    };
    fetchMood();
},[]);

//storing and updating in backend
const handleMoodChange = async (newMood: number) => {
    setMood(newMood);
    await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood: newMood }),
    });
  };


  return (
    <div>
        <h2> mood tracker </h2>
        <input 
            type="number"
            min="1"
            max="10"
            value={mood} 
            onChange={(e) => handleMoodChange(Number(e.target.value))}
      />

        <div
        style={{
            width: "100%",
            height: "20px",
            background: "#b0c4b1",
            overflow: "hidden",
        }}
    >
    <div //dynamic changing mood
        style={{
            width: `${(mood/10)*100}%`,
            height: "100%",
            background: "#4a5759",
        }}
        />
        </div>
     </div>
  );
};

export default MoodTrackerSection;