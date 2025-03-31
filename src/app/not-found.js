"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <AlertTriangle className="w-16 h-16 text-primary" />
        <h1 className="mt-4 text-5xl font-bold">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/">
          <Button className="mt-6 px-6 py-3 rounded-lg text-lg cursor-pointer">
            Go Back Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
