"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Hero } from "../page";

export default function EditHeroPage() {
  const { id } = useParams();
  const heroId = Number(id);
  const router = useRouter();

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

  const handleSave = () => {
    if (!hero) return;

    const updatedHeroes = heroes.map((h) => (h.id === hero.id ? hero : h));
    localStorage.setItem("heroes", JSON.stringify(updatedHeroes));
    router.push("/users");
  };

  const handleDelete = () => {
    const updatedHeroes = heroes.filter((h) => h.id !== heroId);
    localStorage.setItem("heroes", JSON.stringify(updatedHeroes));
    router.push("/users");
  };

  if (!hero) return <p>Hero not found</p>;

  return (
    <div className="w-72 space-y-4">
      <h1 className="text-2xl font-bold">{hero.name}</h1>

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
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}
