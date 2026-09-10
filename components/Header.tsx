import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div id="header-title" className="text-2xl font-bold">
          Prosper Opara
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 text-lg">
            <li>
              <Link href="/" className="hover:underline focus:underline focus:outline-none">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline focus:underline focus:outline-none">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
