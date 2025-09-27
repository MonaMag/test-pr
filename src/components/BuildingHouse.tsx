import React from "react";

type BuildingHouseProps = {
  entrances: number;
  floors: number;
  apartmentsPerFloor: number;
  targetApartment: number;
};

export default function BuildingHouse({
  entrances,
  floors,
  apartmentsPerFloor,
  targetApartment,
}: BuildingHouseProps) {
  return (
    <div className="flex flex-col items-start mt-12">
      <div className="flex flex-col items-center">
        <div
          className="w-full h-12 bg-gray-500
                    [clip-path:polygon(20%_0%,_80%_0%,_100%_100%,_0%_100%)]"
        ></div>

        <div className="flex bg-gray-50 w-full border-b-4 border-gray-500">
          {Array.from({ length: entrances }, (_, entranceIndex) => {
            const apartmentsPerEntrance = apartmentsPerFloor * floors;
            const offset = entranceIndex * apartmentsPerEntrance;

            return (
              <div key={entranceIndex} className="flex flex-col m-2">
                {Array.from({ length: floors }, (_, floorIndex) => {
                  const floor = floors - floorIndex;
                  return (
                    <div
                      key={floorIndex}
                      className="flex justify-around border border-gray-500 w-36"
                    >
                      {Array.from(
                        { length: apartmentsPerFloor },
                        (_, apartIndex) => {
                          const aptNumber =
                            offset +
                            (floor - 1) * apartmentsPerFloor +
                            apartIndex +
                            1;
                          const isHighlighted = aptNumber === targetApartment;
                          return (
                            <div
                              key={aptNumber}
                              className={`w-8 h-12 flex items-center justify-center border m-1 hover:scale-110 transition-transform duration-300
                        ${isHighlighted ? "bg-yellow-400" : "bg-gray-200"}`}
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
  );
}
