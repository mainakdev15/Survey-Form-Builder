import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href={"/"} className="text-4xl font-bold">
        IGCC SURVEY
      </Link>
    </div>
  );
}

export default Logo;
