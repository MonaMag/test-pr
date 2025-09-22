export default function locateApartment(
  apartmentsPerFloor: number,
  floorsPerEntrance: number,
  apartmentNumber: number
) {
  const apartmentsPerEntrance = apartmentsPerFloor * floorsPerEntrance;

  let localNumber = apartmentNumber % apartmentsPerEntrance;
  if (localNumber === 0) localNumber = apartmentsPerEntrance;

  const entrance = Math.ceil(apartmentNumber / apartmentsPerEntrance);

  const floor = Math.ceil(localNumber / apartmentsPerFloor);

  let positionOnFloor = localNumber % apartmentsPerFloor;
  if (positionOnFloor === 0) positionOnFloor = apartmentsPerFloor;

  return { entrance, floor, positionOnFloor, localNumber };
}
