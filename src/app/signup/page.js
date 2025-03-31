"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-muted/30 relative overflow-hidden py-10">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_206%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-card dark:border-neutral-700 shadow-lg p-0">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-center">
              Create an Account
            </h2>
            <p className="text-muted-foreground text-center">
              Join us today! It&apos;s quick and easy.
            </p>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                className="w-full flex items-center justify-center gap-3 rounded-full text-base py-5 bg-white dark:bg-muted border-border shadow-sm hover:bg-muted/80 dark:hover:bg-muted-foreground/10 transition-all duration-300 cursor-pointer"
                variant="outline"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.1 0 5.8 1.1 8 3.1l6-6C34.8 3.1 29.7 1 24 1 14.7 1 6.7 6.6 2.8 14.6l7.2 5.6C12.1 14.5 17.6 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.1 24.5c0-1.5-.1-3-.4-4.5H24v9.1h12.6c-.9 4.5-3.6 7.8-7.6 10.1l7.2 5.6c7-6.5 10.9-15.6 10.9-26.3z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.1 28.8c-1-3-1-6.2 0-9.2L2.8 14c-3 6-3 13 0 19l7.3-5.6z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 47c5.7 0 10.8-1.9 15-5.3l-7.2-5.6c-2.2 1.4-5 2.3-7.8 2.3-6.4 0-11.9-5-13.8-11.5l-7.3 5.6C6.7 41.4 14.7 47 24 47z"
                  />
                </svg>
                Sign up with Google
              </Button>

              <Button
                className="w-full flex items-center justify-center gap-3 rounded-full text-base py-5 bg-white dark:bg-muted border-border shadow-sm hover:bg-muted/80 dark:hover:bg-muted-foreground/10 transition-all duration-300 cursor-pointer"
                variant="outline"
              >
                <Github className="size-5" />
                Sign up with GitHub
              </Button>
            </div>

            {/* OR Divider */}
            <div className="flex items-center gap-2 my-2">
              <div className="h-px w-full bg-border"></div>
              <span className="text-sm text-muted-foreground">or</span>
              <div className="h-px w-full bg-border"></div>
            </div>

            {/* Signup Form */}
            <form className="space-y-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="mt-1 w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-4 rounded-full text-base py-5 cursor-pointer bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg group"
              >
                Sign Up
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-all ease-in-out duration-300" />
              </Button>
            </form>

            <p className="text-base text-muted-foreground text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
