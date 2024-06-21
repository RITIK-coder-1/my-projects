"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <main>
      <nav className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-red-500 border border-solid", className)}>
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
            <ProductItem
              title="Music Academy"
              href="/"
              src="/music.jpg"
              description="Explore Different Varities of Music based on your taste!"
            />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">One</HoveredLink>
            <HoveredLink href="/interface-design">Two</HoveredLink>
            <HoveredLink href="/seo">Three</HoveredLink>
            <HoveredLink href="/branding">Four</HoveredLink>
          </div>
        </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Contact us">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="/"
              description="Prepare for tech interviews like never before."
            />
        </MenuItem>
      </Menu>
      </nav>
    </main>
  )
}

export default Navbar