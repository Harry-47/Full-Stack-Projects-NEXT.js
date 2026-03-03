"use client";
import { useState } from "react";

export default function JokeClient({ initialJoke }) {
  const [joke, setJoke] = useState(initialJoke);
  const [showPunchline, setShowPunchline] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const fetchNextJoke = async () => {
    setLoading(true);
    setShowPunchline(false); // Reset punchline state for new joke
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      setJoke(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 w-full max-w-md text-center shadow-xl">
        <h2 className="text-blue-500 font-mono mb-4 text-sm tracking-widest uppercase">
          Dev Humour
        </h2>

        {/* Joke Setup */}
        <p className="text-xl md:text-2xl font-semibold mb-6">
          {loading ? "Thinking..." : joke?.setup}
        </p>

        {/* Punchline Section */}
        <div className="h-20 flex items-center justify-center">
          {showPunchline && !loading && (
            <p className="text-green-400 text-2xl font-bold animate-bounce">
              {joke?.punchline}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          {!showPunchline ? (
            <button
              onClick={() => setShowPunchline(true)}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all active:scale-95 disabled:opacity-50"
            >
              Reveal Punchline 🎭
            </button>
          ) : (
            <button
              onClick={fetchNextJoke}
              disabled={loading}
              className="bg-white text-black font-bold py-3 rounded-lg transition-all hover:bg-zinc-200 active:scale-95 disabled:opacity-50"
            >
              Next Joke 🚀
            </button>
          )}
        </div>
      </div>
    </div>
  );
}