"use client";

import { useParams} from "next/navigation";
import { useEffect, useState } from "react";
import { Hero } from "../page";

export default function HeroPage() {
  const { id } = useParams();
  const heroId = Number(id);
 

  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("heroes");
    if (data) {
      const parsedHeroes: Hero[] = JSON.parse(data);
      setHeroes(parsedHeroes);

      const currentHero = parsedHeroes.find((h) => h.id === heroId);
      if (currentHero) {
        setHero(currentHero);
      }
    }
  }, [heroId]);

  if (!hero) return <p>Hero not found</p>;

  return (
    <div className="w-72 space-y-4">
      <h1 className="text-2xl font-bold">name</h1>

      <div>
        <label className="block">name</label>
        <input
          className="border p-1 rounded w-full"
          value={hero.name}
          onChange={(e) => setHero({ ...hero, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block">discription</label>
        <textarea
          className="border p-1 rounded w-full"
          value={hero.discription}
          onChange={(e) => setHero({ ...hero, discription: e.target.value })}
        />
      </div>

      <button
        className="px-4 py-2 mr-2 border-1 border-blue-500 text-blue-500 rounded"
        onClick={() => console.log("DELETE")}
      >
        Delete
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => console.log("SAVE")}
      >
        Save
      </button>
    </div>
  );
}
