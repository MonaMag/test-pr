"use client";
import { BinarySearchTask } from "@/components/BinarySearchTask";
import CharCounter from "@/components/CharCounter";
import SearchAppartment from "@/components/SearchApartment";
import SpiralMatrix from "@/components/SpiralMatrix";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SpiralMatrix/>
      <CharCounter />
      <SearchAppartment />
      <BinarySearchTask/>
    </div>
  );
}
