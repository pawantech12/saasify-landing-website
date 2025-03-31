"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Mail, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPost = {
  title: "The Future of SaaS: Trends to Watch in 2025",
  description:
    "Discover the latest trends shaping the SaaS industry in 2025 and beyond.",
  image: "/blog1.jpg",
  category: "Trends",
  date: "March 30, 2025",
  author: "John Doe",
  content: `
    Introduction
    The SaaS industry is evolving rapidly, with new technologies and trends shaping the future.
    
    AI and Automation
    AI-powered solutions are making SaaS platforms smarter and more efficient.
    
    Subscription Models
    The rise of flexible subscription plans and user-centric pricing is revolutionizing the market.
    
    Conclusion
    The SaaS industry is on an exciting trajectory, and staying ahead of these trends will be crucial for businesses.
  `,
};

const relatedBlogs = [
  {
    title: "5 SaaS Marketing Strategies You Need to Know",
    category: "Marketing",
    date: "March 28, 2025",
  },
  {
    title: "Top 10 SaaS Tools for Business Growth in 2025",
    category: "Tools",
    date: "March 26, 2025",
  },
  {
    title: "Why Customer Success is Crucial for SaaS Businesses",
    category: "Customer Success",
    date: "March 22, 2025",
  },
];

const BlogDetails = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 md:px-10 bg-muted/30 dark:bg-black flex justify-between gap-8 max-md:flex-col">
      <div className="w-[70%] max-md:w-full">
        {/* Hero Section */}
        <div className="relative w-full  mx-auto text-center">
          <motion.div
            className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
          <Badge className="absolute top-4 left-4 text-sm px-3 py-1 rounded-full bg-primary text-white">
            {blogPost.category}
          </Badge>
        </div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-center">{blogPost.title}</h1>
          <div className="flex justify-center items-center gap-4 text-muted-foreground text-sm mt-3">
            <Calendar className="size-4" />
            <span>{blogPost.date}</span>
            <span className="mx-2">•</span>
            <span>By {blogPost.author}</span>
          </div>

          {/* Social Share Bar */}
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="outline" size="icon">
              <Facebook className="size-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="size-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="size-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="size-5" />
            </Button>
          </div>

          {/* Blog Content */}
          <article className="prose lg:prose-lg dark:prose-invert mt-8">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </article>

          {/* Comments Section */}
          <div className="mt-16 p-6 bg-background dark:bg-muted/10 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Join the Discussion</h3>

            {/* Comment Input */}
            <div className="flex items-start gap-4">
              <Image
                src="/user.jpg"
                alt="User Avatar"
                width={48}
                height={48}
                className="rounded-full border"
              />
              <textarea
                placeholder="Share your thoughts..."
                className="w-full p-3 border rounded-lg bg-muted/10 dark:bg-muted/20 focus:border-primary focus:ring-2 focus:ring-primary transition"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <Button className="mt-4 w-full bg-primary hover:bg-primary/90 transition">
              Post Comment
            </Button>

            {/* Dummy Comments */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <Image
                  src="/user.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border"
                />
                <div>
                  <h4 className="text-sm font-semibold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">
                    Great insights! Thanks for sharing.
                  </p>
                  <Button variant="link" className="text-primary text-sm">
                    Reply
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 pl-12">
                <Image
                  src="/user.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border"
                />
                <div>
                  <h4 className="text-sm font-semibold">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! This was really helpful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Blogs */}
      <div className="w-[30%] max-md:w-full">
        <h4 className="text-xl font-semibold mb-4">Related Blogs</h4>
        <ul className="space-y-4">
          {relatedBlogs.map((blog, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-4 flex items-start gap-4 bg-background dark:bg-muted/20 hover:shadow-md transition">
                <div className="flex-1">
                  <Badge variant="outline" className="text-xs mb-2">
                    {blog.category}
                  </Badge>
                  <h5 className="text-lg font-medium leading-tight">
                    {blog.title}
                  </h5>
                  <p className="text-sm text-muted-foreground">{blog.date}</p>
                </div>
                <Link href={`/blogs/${index}`}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary cursor-pointer"
                  >
                    <ArrowRight className="size-5" />
                  </Button>
                </Link>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogDetails;
