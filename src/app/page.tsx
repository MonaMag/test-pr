import countCharacters from "@/functions/countСharacters";


export default function Home() {
  console.log(countCharacters("professor"));

  return (
    <main className="flex min-h-screen items-start justify-items-start">
      <h1 className="text-4xl font-bold">
        Next.js
      </h1>
    </main>
  );
}
