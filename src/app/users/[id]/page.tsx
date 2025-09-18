"use client";

import { useParams } from "next/navigation";

export default function ProjectsPage() {
  const params = useParams();

  return <h1>Hero {params.id}</h1>;
}
