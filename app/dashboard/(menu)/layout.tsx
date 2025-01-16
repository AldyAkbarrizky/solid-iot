"use client";

import { menuPaths } from "@/utils/menuMapping";
import { usePathname } from "next/navigation";
import React from "react";

const menuLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const breadcumb =
    menuPaths.find((menuPath) => menuPath.path === lastSegment)?.menu ||
    "Default";

  return (
    <>
      <section className="p-6 bg-white text-[14px] text-black/[.45]">
        Building /{" "}
        <h2 className="text-[20px] text-black leading-7 mt-3 font-medium">
          {breadcumb}
        </h2>
      </section>
      <section className=" h-[88%]">{children}</section>
    </>
  );
};

export default menuLayout;
