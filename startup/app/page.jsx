import JokeClient from "./components/JokeClient";

export default async function JokePage() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke", {
    cache: "no-store",
  });
  const initialJoke = await res.json();
  return <JokeClient initialJoke={initialJoke} />;
}
