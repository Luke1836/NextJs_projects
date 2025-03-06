import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>

      <p className="text-stone-100 text-[2rem] text-center block"><Link href="\meals">Explore Meals</Link></p>
      <p className="text-stone-100 text-[2rem] text-center block"><Link href="\meals/share">Explore Shared Meals</Link></p>
      <p className="text-stone-100 text-[2rem] text-center block"><Link href="\community">Explore Community</Link></p>
    </main>
  );
}
