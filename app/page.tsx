import Image from "next/image";
import { SetCount } from "@/components/set-count";

export default async function Home() {
  return (
    <main className="flex w-100 min-h-screen items-center justify-center p-24 ">
      <div className="w-1/2 bg-gray-800 p-5 rounded-lg">
        <SetCount />
      </div>
    </main>
  );
}
