"use client"; // required for hooks, apparently

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

const Header = () => {
  const pathName = usePathname();
  const isProfilePage = pathName === "/profile";

  return (
    <header className="p-4 flex items-center justify-between max-w-5xl m-auto">
      <Link href="/">
        <h1 className="text-2xl font-bold text-neutral-800 drop-shadow-sm">
          Drawlio 🎨
        </h1>
      </Link>

      {!isProfilePage && (
        <Link
          href="/account"
          className="h-12 w-12 flex items-center justify-center p-4 shrink-0
          rounded-lg shadow-md bg-white
          hover:cursor-pointer hover:scale-105 transition-all"
        >
          <User size={32} strokeWidth={2} color="black" className="shrink-0" />
        </Link>
      )}
    </header>
  );
};

export default Header;
