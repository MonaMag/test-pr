"use client";
import { ReactNode } from "react";

type ProjectLayoutProps = {
  title: string;
  result: Record<string, unknown> | null;
  children: ReactNode;
};

export default function ProjectLayout({ title, result, children }: ProjectLayoutProps) {
  return (
    <div className="space-y-4 w-96 p-4 rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
      <pre className="bg-gray-100 p-4 rounded">
        {result && Object.keys(result).length > 0
          ? JSON.stringify(result, null, 2)
          : null}
      </pre>
    </div>
  );
}