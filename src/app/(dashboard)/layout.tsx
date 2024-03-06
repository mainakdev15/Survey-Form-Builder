import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

type Props = {};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex justify-between items-center border-b px-16">
        <Logo />
        <div className="flex items-center gap-8">
          <Link href={'https://indien.ahk.de/about-us'}>About Us</Link>
          <Link href={'https://indien.ahk.de/contact'}>Contact</Link>
        </div>
        {/* <Profile/> */}
      </nav>
  
      <main>{children}</main>
    </div>
  );
}

export default Layout;
