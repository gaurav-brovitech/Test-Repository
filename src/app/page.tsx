
import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-16 p-8 pb-20 text-xl sm:p-20">
      <h1>Testing the Visual Studio Code Extension</h1>
      <Counter />
      <Link href={'/info'}>Next Page</Link>
    </div>
  );
}
