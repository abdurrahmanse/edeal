"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  Plane,
  Calculator,
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Building2,
  ShieldCheck,
  Heart,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { Button } from "@/modules/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { CurrencySelector } from "./currency-selector";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen } from "@/modules/core/slices/uiSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/modules/ui/dropdown-menu";

export function Navbar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean 4 essential primary links only (as requested by user)
  const primaryLinks = [
    {
      href: "/calculator",
      label: "Rate Calculator",
      icon: Calculator,
    },
    {
      href: "/track",
      label: "Track Radar",
      icon: Search,
    },
    {
      href: "/services",
      label: "Services",
      icon: Plane,
    },
    {
      href: "/buy-for-me",
      label: "Buy For Me",
      icon: ShoppingBag,
    },
  ];

  const secondaryLinks = [
    { href: "/warehouses", label: "Global Hubs", icon: Building2 },
    { href: "/customs-guide", label: "NBR Customs Guide", icon: ShieldCheck },
    { href: "/about", label: "About AponBridge", icon: Heart },
    { href: "/contact", label: "Contact 24/7", icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/20 dark:border-white/5 bg-background/60 backdrop-blur-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform text-white">
            <Plane className="h-5 w-5 transform -rotate-45" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-foreground">
                AponBridge
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                Express
              </span>
            </div>
            <span className="text-[11px] font-medium text-muted-foreground/80 tracking-wide">
              পরবাস থেকে প্রিয়জনের কাছে
            </span>
          </div>
        </Link>

        {/* Minimalist Essential 4-Link Navigation + Clean Dropdown */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl transition-all ${
                  isActive
                    ? "text-foreground font-bold glass-pill shadow-sm"
                    : "hover:text-foreground hover:bg-white/40 dark:hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}

          {/* Simple More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-3 py-2 rounded-2xl hover:text-foreground hover:bg-white/40 dark:hover:bg-white/5 transition-all text-xs font-semibold">
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 p-1.5 rounded-2xl glass-surface border-white/20">
              {secondaryLinks.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium cursor-pointer"
                    >
                      <ItemIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Minimalist Right Controls */}
        <div className="flex items-center gap-2">
          <CurrencySelector />
          <ThemeToggle />

          <Button
            onClick={() => dispatch(setBookingModalOpen(true))}
            variant="gradient"
            size="sm"
            className="hidden sm:inline-flex gap-2 font-semibold shadow-md rounded-2xl px-4 h-9 text-xs"
          >
            <Package className="w-3.5 h-3.5" />
            <span>Book Parcel</span>
          </Button>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-2xl h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border/60 bg-background/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-1.5 animate-in slide-in-from-top-2">
          <div className="text-[11px] font-bold text-muted-foreground uppercase px-2 py-1">Core Services</div>
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2.5 w-full text-left py-2.5 px-3 rounded-2xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold"
                    : "hover:bg-muted/70 text-foreground"
                }`}
              >
                <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <div className="text-[11px] font-bold text-muted-foreground uppercase px-2 pt-2">Company & Guides</div>
          {secondaryLinks.map((item) => {
            const ItemIcon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 w-full text-left py-2 px-3 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <ItemIcon className="w-4 h-4 text-emerald-600" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="pt-3">
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                dispatch(setBookingModalOpen(true));
              }}
              variant="gradient"
              className="w-full gap-2 py-2.5 rounded-2xl text-xs font-bold"
            >
              <Package className="w-4 h-4" />
              <span>Book Parcel Now</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
