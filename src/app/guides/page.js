"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Mail } from "lucide-react";

const guides = [
  {
    title: "Getting Started with SaaS Development",
    description:
      "A beginner-friendly guide to launching your first SaaS product.",
    image: "/blog1.jpg",
    category: "Beginner",
    date: "March 30, 2025",
  },
  {
    title: "Optimizing SaaS Pricing Models",
    description: "Learn how to structure your pricing for maximum revenue.",
    image: "/blog2.jpg",
    category: "Business",
    date: "March 25, 2025",
  },
  {
    title: "Scaling Your SaaS Product Efficiently",
    description:
      "A deep dive into scaling SaaS applications without breaking the system.",
    image: "/blog3.webp",
    category: "Advanced",
    date: "March 20, 2025",
  },
];

const SaaSGuidesPage = () => {
  const [search, setSearch] = useState("");

  const filteredGuides = guides.filter((guide) =>
    guide.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full py-20 px-6 md:px-10 bg-muted/30 dark:bg-black relative">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge
          className="rounded-full px-4 py-1.5 text-sm font-medium"
          variant="secondary"
        >
          Guides
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
          Master SaaS with Our Expert Guides
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Learn from the best with detailed guides on SaaS development,
          marketing, and growth.
        </p>
        <div className="flex w-full max-w-md mx-auto mt-6 gap-2">
          <Input
            type="text"
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 h-12 text-base"
          />
          <Button
            className={"flex items-center gap-1 text-base h-12 cursor-pointer"}
          >
            <Search className="size-4" />
            Search
          </Button>
        </div>
      </motion.div>

      {/* Guides Grid */}
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {filteredGuides.map((guide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden rounded-xl shadow-lg bg-background dark:bg-muted/10 transition-transform transform hover:scale-[1.02] hover:shadow-xl py-0">
              <div className="relative w-full h-56">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="px-6 pb-4">
                <Badge
                  variant="secondary"
                  className="text-sm mb-3 px-3 py-1 rounded-full"
                >
                  {guide.category}
                </Badge>
                <h3 className="text-2xl font-bold text-foreground">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {guide.date}
                </p>
                <p className="mt-3 text-muted-foreground">
                  {guide.description}
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 text-primary font-semibold hover:underline cursor-pointer"
                >
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center border shadow-md bg-white border-gray-200 dark:border-neutral-700 p-10 rounded-lg dark:bg-[#262626]  mx-auto text-center">
        <Mail className="size-10 text-primary mb-4" />
        <h3 className="text-2xl font-semibold">Subscribe to Our Newsletter</h3>
        <p className="text-muted-foreground mt-2 mb-4">
          Get the latest SaaS insights delivered straight to your inbox.
        </p>
        <div className="flex w-full max-w-md gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 text-base h-12"
          />
          <Button className={"h-12 text-base cursor-pointer"}>Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default SaaSGuidesPage;
