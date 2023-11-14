import * as React from "react";

import Image from 'next/image'
import Link from "next/link";
import { Container } from "../container";

const navList = ["Home", "About", "Creators", "Angels"];

function Nav() {
  return (
    <Container>
      <nav className="flex flex-col md:flex-row items-center justify-between py-1">
        <Nav.MoundUpLogo />
        <ul className="flex flex-col md:flex-row gap-2">
          {navList.map((item, index) => (
            <li key={index}>
              <Link href={item.toLowerCase()} className="block px-4 py-1 font-semibold">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

const MoundUpLogo = () => (
  <div id="logo" className="h-20 w-32 relative">
    <Image src={"/MoundUP-Africa-Logo.png"} alt="MoundUP-Africa-Logo" className="object-fit object-contain" fill />
  </div>
);
Nav.MoundUpLogo = MoundUpLogo;

export default Nav;