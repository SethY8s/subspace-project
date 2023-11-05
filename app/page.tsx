import Image from "next/image";
import { SetCount } from "@/components/set-count";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SetCount />
    </main>
  );
}
