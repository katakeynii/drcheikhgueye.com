'use client';
import Image from 'next/image';
import Link from "next/link";
import React, { useState } from "react";
import main from '../../assets/Frame 2.png';
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Présentation", href: "/presentation" },
  { text: "Publications", href: "/publications" },
  { text: "Ouvrages", href: "/ouvrages" },
  { text: "Traductions", href: "/traductions" },
];
const titles = ['Docteur en science de l’éducation', 'Inspecteur Général de l’éducation nationale', 'Traducteur Arabe-Français-Anglais']
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <header className="w-1/6 px-5 py-10 border-r-4 border-emerald-500 sticky">
      <nav className={``}>
        <Link href={"/"}>
          <div className="" >
            <Image  alt="dad" src={main} width="100" height="100" className="rounded-full"/>
            <h1 className="logo text-2xl mt-10 ">Dr. Cheikh GUEYE</h1>

            {/* <div className="title">
              <TextTransition springConfig={presets.wobbly}>
                {titles[index % titles.length]}
              </TextTransition>
            </div> */}
          </div>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} flex flex-col gap-6 mt-10`}>
          {MENU_LIST.map((menu, idx) => (
              <NavItem 
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
                active={activeIdx === idx} {...menu} />
          ))}
          <a className="close-mobile-menu" onClick={() =>setNavActive(false)}>Fermer</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;