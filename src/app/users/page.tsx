"use client";

import Link from "next/link";
import { useState } from "react";

export type Hero = {
  id: number;
  name: string;
  discription: string;
};

const heroesArr: Hero[] = [
  {
    id: 1,
    name: "Peter Pen",
    discription: "Story anout boy called Peter Pen",
  },
  {
    id: 2,
    name: "Harry Poter",
    discription: "Story anout boy called Peter Pen",
  },
  {
    id: 3,
    name: "Peter Pen",
    discription: "Story anout boy called Peter Pen",
  },
];

export default function UsersPage() {
  const [heroes, setHeroes] = useState<Hero[]>(heroesArr);

  const addHero = () => {
    const newHero: Hero = {
      id: Date.now(),
      name: "Name",
      discription: "Discription",
    };
    setHeroes([...heroes, newHero]);
  };

  return (
    <div className="flex flex-col w-lg">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          onClick={addHero}
          className="px-6 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {heroes.map((hero) => (
          <li key={hero.id} className="border-b p-2 rounded hover:bg-gray-100">
            <Link href={`/users/${hero.id}`}>
              <div>
                <h3 className="text-xl">{hero.name}</h3>
                <span className="text-sm">{hero.discription}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
