import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import Header from "./ui/components/header/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="px-6 py-6">
      <h1 className={`${montserrat.className} antialiased text-6xl`}>
        Welcome to Craic!
      </h1>
      <p>The social media site for the left!</p>
      </div>
    </main>
  );
}
