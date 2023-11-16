import * as React from "react";

import Image from 'next/image'
import Link from "next/link";
import { Container } from "../container";

const navList = ["Home", "About", "Creators", "Angels"];

function Nav() {
  return (
    <Container>
      <nav className="flex flex-col md:flex-row items-center justify-between py-[2px]">
        <Nav.MoundUpLogo />
        <ul className="flex flex-col md:flex-row gap-2">
          {navList.map((item, index) => (
            <li key={index}>
              <Link
                href={item.toLowerCase()}
                className="block px-5 py-2 font-semibold hover:shadow-[inset_100px_0_0_0_#E0EBE8] hover:text-moundUpGreen shadow-[inset_0_0_0_0_#E0EBE8] transition-shadow ease-in-out rounded-sm"
              >
                {item}
              </Link>
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
