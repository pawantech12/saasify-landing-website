"use client";

import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Navbar = ({ isScrolled, mounted }) => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 px-10 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className=" flex h-16 items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground ">
              S
            </div>
            <span>SaaSify</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/features"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/testimonials"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>
          <Link
            href="/pricing"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/faq"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full cursor-pointer"
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-[18px]" />
            ) : (
              <Moon className="size-[18px]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link
            href="/login"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Link href={`/signup`}>
            <Button className="rounded-full text-base group cursor-pointer py-5">
              Get Started
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-all ease-in-out duration-200" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full cursor-pointer"
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-[18px]" />
            ) : (
              <Moon className="size-[18px]" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-[#262626]  border-b"
        >
          <div className="py-4 px-5 flex flex-col gap-4">
            <Link
              href="/features"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/testimonials"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/pricing"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link
                href="/login"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link href={`/signup`}>
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
