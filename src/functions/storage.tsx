import { Hero } from "@/types/hero";

export function getHeroesFromStorage(): Hero[] {
  if (typeof window === "undefined") return [];

  try {
    const data = localStorage.getItem("heroes");
    if (!data) return [];
    return JSON.parse(data) as Hero[];
  } catch (e) {
    console.error("Error parsing heroes from localStorage:", e);
    localStorage.removeItem("heroes");
    return [];
  }
}

export function saveHeroesToStorage(heroes: Hero[]) {
    if(typeof window === "undefined") return;
    localStorage.setItem("heroes", JSON.stringify(heroes))
}
