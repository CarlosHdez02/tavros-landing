import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center gap-x-8">
      <Link
        className="cursor-pointer text-[#E8B44F] hover:text-[#c99a40] transition-colors font-medium text-lg"
        href="/programs"
      >
        Programas
      </Link>
      <Link
        className="cursor-pointer text-[#E8B44F] hover:text-[#c99a40] transition-colors font-medium text-lg"
        href="/stories"
      >
        Testimonios
      </Link>
      <div className="border border-[#E8B44F] rounded-lg p-2 hover:bg-[#E8B44F]/10 transition-colors">
        <Link
          className="cursor-pointer text-[#E8B44F] font-semibold"
          href="/join"
        >
          Ser una persona de poder
        </Link>
      </div>
    </nav>
  );
}
