import Image from "next/image";
import Link from "next/link";
import React from "react";
import IGCCLogo from './../../public/assets/igcc-v2.svg';
function Logo() {
  return (
    <div>
      <Link href={"/"} className="text-4xl font-bold">
        <Image
          src={IGCCLogo}
          alt="IGCC Logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
