import Image from "next/image";
import { SetCount } from "@/components/set-count";

export default async function Home() {
  return (
    <main className="flex w-100 min-h-screen items-center justify-center p-24 ">
      <div className="w-7/8 md:w-3/4 lg:w-1/2 bg-gray-200 opacity-70 p-5 rounded-lg">
        <SetCount />
      </div>
    </main>
  );
}
