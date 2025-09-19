"use client";

import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import Link from "next/link";
import { useEffect, useState } from "react";

export type Hero = {
  id: number;
  name: string;
  discription: string;
};

export default function UsersPage() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDiscription, setNewDiscription] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("heroes");

    if (data) {
      try {
        setHeroes(JSON.parse(data));
      } catch (e) {
        console.error("Error of parse heroes:", e);
        localStorage.removeItem("heroes");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify(heroes));
  }, [heroes]);

  const addHero = () => {
    const newHero: Hero = {
      id: Date.now(),
      name: newName,
      discription: newDiscription,
    };
    setHeroes([...heroes, newHero]);
    setNewName("");
    setNewDiscription("");
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
          <li key={hero.id} className="border-b p-2 rounded hover:bg-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-xl">{hero.name}</h3>
                <span className="text-sm">{hero.discription}</span>
              </div>
              <Link href={`/users/${hero.id}`}>
                <ChevronRightIcon className="w-6 h-6 hover:text-blue-500" />
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0  bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Add hero</h2>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Name"
              className="w-full border rounded p-2 mb-2"
            />
            <textarea
              value={newDiscription}
              onChange={(e) => setNewDiscription(e.target.value)}
              placeholder="Discription"
              className="w-full border rounded p-2 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setNewName("");
                  setNewDiscription("");
                }}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={addHero}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
