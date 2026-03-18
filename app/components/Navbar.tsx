import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 mb-10">
      <Link href="/">Home</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/thinking">Thinking</Link>
      <Link href="/about">Sobre</Link>
    </nav>
  );
}