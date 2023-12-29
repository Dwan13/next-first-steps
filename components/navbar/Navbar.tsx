import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "..";

// const temporalAsycn = async() =>{
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve(true);
//         },3000)
//     })
// }

const navItems = [
  { path: "about", text: "About" },
  { path: "pricing", text: "Pricing" },
  { path: "contact", text: "Contact" },
];

export default function Navbar() {
  //await temporalAsycn();
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex-1"></div>
      {navItems.map((navitem) => (
        <ActiveLink key={navitem.path} {...navitem}/>
      ))}
    </nav>
  );
}
