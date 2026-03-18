"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [style, setStyle] = useState({});

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 25;
    const rotateY = (x - rect.width / 2) / 25;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  }

  function reset() {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
    });
  }

  return (
    <div className="fixed top-4 left-0 w-full z-50 flex justify-center">
      <nav
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={style}
        className="relative bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-md flex gap-6 items-center transition-transform duration-200 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border before:border-[#3B82F6]/10"
      >

        {/* LINKS */}
        <Link
          href="/"
          className="text-sm font-semibold text-[#3B82F6] border-b-2 border-[#3B82F6]"
        >
          Home
        </Link>

        <Link href="/projects" className="text-sm text-gray-600 hover:text-[#3B82F6]">
          Projetos
        </Link>

        <Link href="/thinking" className="text-sm text-gray-600 hover:text-[#3B82F6]">
          Thinking
        </Link>

        <Link href="/about" className="text-sm text-gray-600 hover:text-[#3B82F6]">
          Sobre
        </Link>

        {/* BOTÃO */}
        <button className="ml-4 bg-[#F97316] text-white px-4 py-2 rounded-full text-sm hover:scale-105 transition">
          Contato
        </button>

      </nav>
    </div>
  );
}