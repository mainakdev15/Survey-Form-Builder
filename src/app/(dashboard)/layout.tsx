import Logo from "@/components/Logo";
import React from "react";

type Props = {};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex justify-between items-center border-b">
        <Logo />
        {/* <Profile/> */}
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
