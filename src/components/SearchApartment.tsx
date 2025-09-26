"use client";
import { useState } from "react";
import ProjectLayout from "./ProjectLayout";
import locateApartment from "@/functions/getLocateApartment";
import isPositiveInteger from "@/functions/isPositiveInteger";

type LocateResult = {
  entrance: number;
  floor: number;
  positionOnFloor: number;
};

export default function SearchAppartment() {
  const [apartmentsPerFloor, setApartmentsPerFloor] = useState("");
  const [floorsPerEntrance, setFloorsPerEntrance] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");

  const [result, setResult] = useState<LocateResult | null>(null);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const floors = Number(floorsPerEntrance);
  const apartments = Number(apartmentsPerFloor);
  const target = Number(apartmentNumber);

  console.log({ floors, apartments, target, result });

  const handleSearch = () => {
    if (![floors, apartments, target].every(isPositiveInteger)) {
      setError("Введите корректные целые числа больше 0");
      setResult(null);
      setShowResult(false);
      return;
    }
    setError("");
    setResult(locateApartment(apartments, floors, target));
    setShowResult(true);
  };

  return (
    <ProjectLayout title="Search Apartment" result={result}>
      <div className="space-y-4 w-96">
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
          className="px-4 py-2 bg-blue-500 text-white rounded w-full cursor-pointer"
        >
          Найти
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </div>

      {showResult && result && (
        <div className="flex flex-col items-center mt-6">
          <div className="flex flex-col items-center">
            <div
              className="w-full h-12 bg-gray-500
                    [clip-path:polygon(20%_0%,_80%_0%,_100%_100%,_0%_100%)]"
            ></div>

            <div className="flex bg-gray-50 w-full border-b-4 border-gray-500">
              {Array.from({ length: result.entrance }, (_, entranceIndex) => {
                const apartmentsPerEntrance = apartments * floors;
                const offset = entranceIndex * apartmentsPerEntrance;

                return (
                  <div key={entranceIndex} className="flex flex-col m-2">
                    {Array.from({ length: floors }, (_, floorIndex) => {
                      const floor = Number(floorsPerEntrance) - floorIndex;
                      return (
                        <div
                          key={floorIndex}
                          className="flex justify-around border border-gray-500 w-36"
                        >
                          {Array.from(
                            { length: apartments },
                            (_, apartIndex) => {
                              const aptNumber =
                                offset +
                                (floor - 1) * apartments +
                                apartIndex +
                                1;
                              const isHighlighted = aptNumber === target;
                              return (
                                <div
                                  key={aptNumber}
                                  className={`w-8 h-12 flex items-center justify-center border m-1
                        ${isHighlighted ? "bg-blue-400 " : "bg-gray-200"}`}
                                >
                                  {aptNumber}
                                </div>
                              );
                            }
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </ProjectLayout>
  );
}
