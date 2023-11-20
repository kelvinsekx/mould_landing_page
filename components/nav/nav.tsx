"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { Container } from "../container";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import styles from "./nav.module.css";

const navList = ["Home", "About", "Creators", "Angels"];

function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  return (
    <Container>
      <nav className={styles.nav}>
        <div className="flex items-center justify-between w-full md:w-fit">
          <Nav.MoundUpLogo />
          <div
            className="block md:hidden"
            onClick={() => setOpenNav((prev) => !prev)}
          >
            {!openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M21.0938 18.75H0.78125C0.57405 18.75 0.375336 18.8323 0.228823 18.9788C0.08231 19.1253 0 19.324 0 19.5312L0 21.0938C0 21.301 0.08231 21.4997 0.228823 21.6462C0.375336 21.7927 0.57405 21.875 0.78125 21.875H21.0938C21.301 21.875 21.4997 21.7927 21.6462 21.6462C21.7927 21.4997 21.875 21.301 21.875 21.0938V19.5312C21.875 19.324 21.7927 19.1253 21.6462 18.9788C21.4997 18.8323 21.301 18.75 21.0938 18.75ZM21.0938 12.5H0.78125C0.57405 12.5 0.375336 12.5823 0.228823 12.7288C0.08231 12.8753 0 13.074 0 13.2812L0 14.8438C0 15.051 0.08231 15.2497 0.228823 15.3962C0.375336 15.5427 0.57405 15.625 0.78125 15.625H21.0938C21.301 15.625 21.4997 15.5427 21.6462 15.3962C21.7927 15.2497 21.875 15.051 21.875 14.8438V13.2812C21.875 13.074 21.7927 12.8753 21.6462 12.7288C21.4997 12.5823 21.301 12.5 21.0938 12.5ZM21.0938 6.25H0.78125C0.57405 6.25 0.375336 6.33231 0.228823 6.47882C0.08231 6.62534 0 6.82405 0 7.03125L0 8.59375C0 8.80095 0.08231 8.99966 0.228823 9.14618C0.375336 9.29269 0.57405 9.375 0.78125 9.375H21.0938C21.301 9.375 21.4997 9.29269 21.6462 9.14618C21.7927 8.99966 21.875 8.80095 21.875 8.59375V7.03125C21.875 6.82405 21.7927 6.62534 21.6462 6.47882C21.4997 6.33231 21.301 6.25 21.0938 6.25ZM21.0938 0H0.78125C0.57405 0 0.375336 0.08231 0.228823 0.228823C0.08231 0.375336 0 0.57405 0 0.78125L0 2.34375C0 2.55095 0.08231 2.74966 0.228823 2.89618C0.375336 3.04269 0.57405 3.125 0.78125 3.125H21.0938C21.301 3.125 21.4997 3.04269 21.6462 2.89618C21.7927 2.74966 21.875 2.55095 21.875 2.34375V0.78125C21.875 0.57405 21.7927 0.375336 21.6462 0.228823C21.4997 0.08231 21.301 0 21.0938 0Z"
                  fill="#0F0800"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
              >
                <path
                  d="M22.6562 0.5625H2.34375C1.0498 0.5625 0 1.6123 0 2.90625V20.0938C0 21.3877 1.0498 22.4375 2.34375 22.4375H22.6562C23.9502 22.4375 25 21.3877 25 20.0938V2.90625C25 1.6123 23.9502 0.5625 22.6562 0.5625ZM18.5742 14.7471C18.8086 14.9814 18.8086 15.3623 18.5742 15.5967L16.5967 17.5742C16.3623 17.8086 15.9814 17.8086 15.7471 17.5742L12.5 14.2979L9.25293 17.5742C9.01855 17.8086 8.6377 17.8086 8.40332 17.5742L6.42578 15.5967C6.19141 15.3623 6.19141 14.9814 6.42578 14.7471L9.70215 11.5L6.42578 8.25293C6.19141 8.01855 6.19141 7.6377 6.42578 7.40332L8.40332 5.42578C8.6377 5.19141 9.01855 5.19141 9.25293 5.42578L12.5 8.70215L15.7471 5.42578C15.9814 5.19141 16.3623 5.19141 16.5967 5.42578L18.5742 7.40332C18.8086 7.6377 18.8086 8.01855 18.5742 8.25293L15.2979 11.5L18.5742 14.7471Z"
                  fill="#0F0800"
                />
              </svg>
            )}
          </div>
        </div>
        <ul
          className={twMerge(
            styles.scale0,
            clsx(" md:flex flex-col md:flex-row gap-2 max-md:w-full z-10", {
              ["flex " + styles.scale1]: openNav,
            })
          )}
        >
          {navList.map((item, index) => (
            <li
              key={index}
              className="max-md:w-full max-md:border-b max-md:text-center"
            >
              <Link
                href={(function () {
                  const i = item.toLowerCase();
                  if (i === "home") {
                    return "/";
                  } else return "#" + item.toLowerCase();
                })()}
                className="block max-md:w-full md:px-5 md:py-2 font-semibold hover:shadow-[inset_100px_0_0_0_#E0EBE8] hover:text-moundUpGreen shadow-[inset_0_0_0_0_#E0EBE8] transition-shadow ease-in-out rounded-sm"
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
    <Image
      src={"/MoundUP-Africa-Logo.png"}
      alt="MoundUP-Africa-Logo"
      className="object-fit object-contain"
      fill
    />
  </div>
);
Nav.MoundUpLogo = MoundUpLogo;

export default Nav;
