"use client";

import { Modal } from "@/components/Modal";
import { Hero } from "@/types/hero";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function EditHeroPage() {
  const { id } = useParams();
  const heroId = Number(id);
  const router = useRouter();

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [hero, setHero] = useState<Hero | null>(() => {
    if (typeof window !== "undefined") {
      try {
        const data = localStorage.getItem("heroes");
        if (data) {
          const parsed: Hero[] = JSON.parse(data);
          return parsed.find((h) => h.id === heroId) || null;
        }
      } catch (e) {
        console.error("Error parsing heroes:", e);
      }
    }
    return null;
  });

  const handleChange = (field: keyof Hero, value: string) => {
    setHero((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSave = () => {
    if (!hero) return;

    try {
      const data = localStorage.getItem("heroes");
      const heroes: Hero[] = data ? JSON.parse(data) : [];

      const updatedHeroes = heroes.map((h) => (h.id === hero.id ? hero : h));
      localStorage.setItem("heroes", JSON.stringify(updatedHeroes));

      router.push("/users");
    } catch (e) {
      console.error("Error saving hero:", e);
    }
  };

  const handleDeleteHero = () => {
    if (!hero) return;

    try {
      const data = localStorage.getItem("heroes");
      const heroes: Hero[] = data ? JSON.parse(data) : [];

      const updatedHeroes = heroes.filter((h) => h.id !== heroId);
      localStorage.setItem("heroes", JSON.stringify(updatedHeroes));

      router.push("/users");
    } catch (e) {
      console.error("Error deleting hero:", e);
    }
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
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div>
        <label className="block">description</label>
        <textarea
          className="border p-1 rounded w-full"
          value={hero.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>

      <button
        className="px-4 py-2 mr-2 border-1 border-blue-500 text-blue-500 rounded"
        onClick={() => setIsConfirmOpen(true)}
      >
        Delete
      </button>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSave}
      >
        Save
      </button>
      {isConfirmOpen && (
        <Modal
          title="Delete Hero"
          actions={
            <>
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteHero}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </>
          }
        >
          <p>Are you sure you want to delete {hero.name}?</p>
        </Modal>
      )}
    </div>
  );
}
