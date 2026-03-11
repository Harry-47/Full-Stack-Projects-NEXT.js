import JokeClient from "./components/JokeClient";

export interface Joke {
    id: number;
    setup: string;
    punchline: string;
    type?: string;
  
};

export default async function JokePage() {
  const res : Response  = await fetch("https://official-joke-api.appspot.com/random_joke", {
    cache: "no-store",
  });
  const initialJoke : Joke = await res.json();
  return <JokeClient initialJoke={initialJoke} />;
}
