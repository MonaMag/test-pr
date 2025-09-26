"use client";
import CharCounter from "@/components/CharCounter";
import SearchAppartment from "@/components/SearchApartment";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <CharCounter />
      <SearchAppartment />
    </div>
  );
}
