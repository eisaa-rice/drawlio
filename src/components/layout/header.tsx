"use client"; // required for hooks, apparently

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const isProfilePage = pathName === "/profile";

  return (
    <header className="p-4 flex items-center justify-between max-w-5xl m-auto">
      <Link href="/">
        <h1 className="text-2xl font-bold">Drawlio 🎨</h1>
      </Link>

      {!isProfilePage && (
        <Link
          href="/profile"
          className="h-12 w-12 rounded-full border border-neutral-400 p-4 
          hover:cursor-pointer hover:bg-neutral-100"
        ></Link>
      )}
    </header>
  );
};

export default Header;
