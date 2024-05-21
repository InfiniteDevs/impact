"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-sm mx-auto z-50 border border-white/[0.8] rounded-full ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/pricing">Pricing</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
      </Menu>
    </div>
  );
}
