'use client';
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem"
import TextTransition, { presets } from "react-text-transition";

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
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <div className="logo-container" >
            <h1 className="logo">Dr. Cheikh GUEYE</h1>
            <div className="title">
              <TextTransition springConfig={presets.wobbly}>
                {titles[index % titles.length]}
              </TextTransition>
            </div>
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
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
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