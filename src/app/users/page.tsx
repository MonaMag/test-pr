"use client";

import HeroModal from "@/components/HeroModal";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import { Hero } from "@/types/hero";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("heroes");
      if (data) {
        try {
          return JSON.parse(data) as Hero[];
        } catch (e) {
          console.error("Error parsing heroes:", e);
          localStorage.removeItem("heroes");
        }
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify(heroes));
    console.log("2:", heroes);
  }, [heroes]);

  const handleSaveHero = (name: string, description: string) => {
    const newHero: Hero = { id: Date.now(), name, description };
    setHeroes([...heroes, newHero]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-lg">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {heroes.map((hero) => (
          <li key={hero.id} className="border-b rounded hover:bg-gray-100">
            <Link
              href={`/users/${hero.id}`}
              className="flex justify-between items-center p-2 w-full"
            >
              <div className="flex flex-col">
                <h3 className="text-xl">{hero.name}</h3>
                <span className="text-sm">{hero.description}</span>
              </div>
              <ChevronRightIcon className="w-6 h-6" />
            </Link>
          </li>
        ))}
      </ul>

      <HeroModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveHero}
      />
    </div>
  );
}
