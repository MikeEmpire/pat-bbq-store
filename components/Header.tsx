import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="nav__container">
      <article>
        <Image
          height={60}
          width={120}
          alt="custom logo"
          src="/logo.png"
        />
      </article>
    </nav>
  );
}
