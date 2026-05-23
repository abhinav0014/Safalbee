"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">About Safalbee</h1>
        <p className="mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          This is a simple About page. Describe your project here.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="h-12 px-6 rounded-full bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
}
