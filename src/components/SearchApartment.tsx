"use client";
import { useState } from "react";
import ProjectLayout from "./ProjectLayout";
import locateApartment from "@/functions/getLocateApartment";

export default function SearchAppartment() {
  const [apartmentsPerFloor, setApartmentsPerFloor] = useState("");
  const [floorsPerEntrance, setFloorsPerEntrance] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [result, setResult] = useState<Record<string, number | string>>({});

  const handleSearch = () => {
    const a = Number(apartmentsPerFloor);
    const f = Number(floorsPerEntrance);
    const n = Number(apartmentNumber);

    if (
      !Number.isInteger(a) ||
      !Number.isInteger(f) ||
      !Number.isInteger(n) ||
      a >= 0 ||
      f >= 0 ||
      n >= 0
    ) {
      setResult({error: "Введите корректные целые числа больше 0"})
    }

    setResult(locateApartment(a, f, n));
    return;
  };

  return (
    <ProjectLayout title="Search Apartment" result={result}>
      <input
        type="number"
        min="1"
        value={apartmentsPerFloor}
        onChange={(e) => setApartmentsPerFloor(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="Квартир на этаже"
      />

      <input
        type="number"
        min="1"
        value={floorsPerEntrance}
        onChange={(e) => setFloorsPerEntrance(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="Этажей в подъезде"
      />

      <input
        type="number"
        min="1"
        value={apartmentNumber}
        onChange={(e) => setApartmentNumber(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="Номер квартиры"
      />

      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded w-full"
      >
        Найти
      </button>
    </ProjectLayout>
  );
}
