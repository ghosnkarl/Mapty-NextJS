"use client";
import Image from "next/image";
import "../styles/header.css";
import maptyImg from "../app/favicon.ico";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/data";

export default function Header() {
  const pathName = usePathname();

  return (
    <div className="header-container">
      <Link className="header-logo" href="/">
        <Image src={maptyImg} alt="Image of location pin in circle" />
        <p>Mapty</p>
      </Link>

      <nav className="navigation-container">
        {NAV_LINKS.map(({ title, link }) => (
          <Link
            className={pathName === link ? "nav-active" : undefined}
            key={title}
            href={link}
          >
            {title}
          </Link>
        ))}
      </nav>

      <div className="hidden" />
    </div>
  );
}
