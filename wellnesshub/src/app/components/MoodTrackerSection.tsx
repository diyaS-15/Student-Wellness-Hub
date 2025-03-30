"use client"; 

import { useState, useEffect } from "react";

const MoodTrackerSection = () => {
    const [mood, setMood] = useState<number>(5); //this the default mood


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
        <h2 className="text-4xl">mood tracker</h2>
        <input 
            type="number"
            min="0"
            max="10"
            value={mood} 
            onChange={(e) => handleMoodChange(Number(e.target.value))}
            className="w-20 h-8 text-lg p-2 border border-[#3b2f2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b2f2a] mt-4 mb-4"
      />

        <div
        style={{
            width: "100%",
            height: "20px",
            background: "#3b2f2a", 
            overflow: "hidden",
        }}
    >
    <div //dynamic changing mood
        style={{
            width: `${(mood/10)*100}%`,
            height: "100%",
            background: "#B0C4B1", 
        }}
        />
        </div>
     </div>
  );
};

export default MoodTrackerSection;