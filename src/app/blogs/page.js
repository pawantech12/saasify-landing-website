"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    title: "The Future of SaaS: Trends to Watch in 2025",
    description:
      "Discover the latest trends shaping the SaaS industry in 2025 and beyond.",
    image: "/blog1.jpg",
    category: "Trends",
    date: "March 30, 2025",
  },
  {
    title: "How to Scale Your SaaS Business Efficiently",
    description:
      "Learn the best strategies to scale your SaaS business without breaking the bank.",
    image: "/blog2.jpg",
    category: "Growth",
    date: "March 25, 2025",
  },
  {
    title: "The Role of AI in SaaS Platforms",
    description:
      "Explore how AI is transforming SaaS applications and improving user experience.",
    image: "/blog3.webp",
    category: "AI",
    date: "March 20, 2025",
  },
];

const BlogPage = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 bg-muted/30 dark:bg-black relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge
          className="rounded-full px-4 py-1.5 text-sm font-medium"
          variant="secondary"
        >
          Blog
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
          Stay Updated with the Latest SaaS Insights
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Explore expert opinions, industry news, and practical guides to help
          grow your SaaS business.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {blogs.map((blog, index) => (
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
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="px-6 pb-4">
                <Badge
                  variant="secondary"
                  className="text-sm mb-3 px-3 py-1 rounded-full"
                >
                  {blog.category}
                </Badge>
                <h3 className="text-2xl font-bold text-foreground">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {blog.date}
                </p>
                <p className="mt-3 text-muted-foreground">{blog.description}</p>
                <Link href={`/blogs/${blog.title}`}>
                  <Button
                    variant="ghost"
                    className="mt-4 text-primary font-semibold hover:underline cursor-pointer"
                  >
                    Read More →
                  </Button>
                </Link>
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

export default BlogPage;
