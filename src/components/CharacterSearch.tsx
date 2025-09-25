"use client";

import { Hero } from "@/types/hero";
import { useState } from "react";

type Character = {
  name: string;
  house: string;
};

type CharacterSearchProps = {
  onSelect: (hero: Hero) => void; 
};

export default function CharacterSearch({ onSelect }: CharacterSearchProps) {
  const [searchInput, setSearchInput] = useState("");
  const [options, setOptions] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchInput) return;

    setLoading(true);

    try {
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const data: Character[] = await res.json();

      const normalizedSearch = searchInput.toLowerCase();

      const filtered: Hero[] = data
        .filter((ch) =>
          ch.name.toLowerCase().includes(normalizedSearch)
        )
        .map((ch) => ({
          id: Date.now() + Math.random(),
          name: ch.name,
          description: ch.house || "",
        }));

      setOptions(filtered);
    } catch (e) {
      console.error("Error fetching characters:", e);
    } finally {
      setLoading(false);
    }
  };

  
  const handleSelect = (hero: Hero) => {
    onSelect(hero);
    setSearchInput("");
    setOptions([]);
  };

  return (
    <div className="flex flex-col w-full max-w-md">
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Search character..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-1 border rounded p-2"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500 mb-2">Loading...</p>}

      {options.length > 0 && (
        <ul className="border rounded bg-white shadow max-h-60 overflow-y-auto">
          {options.map((hero) => (
            <li
              key={hero.id}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(hero)}
            >
              {hero.name} {hero.description && `(${hero.description})`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}