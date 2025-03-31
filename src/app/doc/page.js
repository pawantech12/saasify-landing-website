"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const docs = [
  {
    title: "Getting Started",
    content: "Learn how to integrate our SaaS platform quickly and easily.",
  },
  {
    title: "API Reference",
    content: "Explore our API endpoints, authentication, and usage examples.",
  },
  {
    title: "Pricing & Plans",
    content: "Understand our pricing structure and plan options.",
  },
  {
    title: "Customization",
    content: "Learn how to personalize your experience with our platform.",
  },
  { title: "FAQs", content: "Find answers to the most common questions." },
];

const DocumentationPage = () => {
  const [activeDoc, setActiveDoc] = useState(docs[0]);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center my-12"
      >
        <Badge
          className="rounded-full px-4 py-1.5 text-sm font-medium"
          variant="secondary"
        >
          Documentation
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
          SaaS Working Documentation
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Learn everything you need to know to get started, integrate, and use
          our SaaS effectively.
        </p>
      </motion.div>

      <section className="w-full py-10 px-6 md:px-10 bg-muted/30 dark:bg-black flex gap-6 max-md:flex-col">
        {/* Mobile Sidebar Button */}
        <Button
          onClick={() => setIsOpen(true)}
          variant="outline"
          className="md:hidden w-fit"
        >
          <Menu className="size-5" />
        </Button>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-1/4 bg-white dark:bg-muted/10 shadow-md border rounded-lg p-6 ">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <BookOpen className="size-5 text-primary" /> Documentation
          </h3>
          <Separator className="my-4" />
          <ul className="space-y-4">
            {docs.map((doc, index) => (
              <li key={index}>
                <Button
                  variant={activeDoc.title === doc.title ? "default" : "ghost"}
                  className="w-full text-left cursor-pointer text-base"
                  onClick={() => setActiveDoc(doc)}
                >
                  {doc.title}
                </Button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Mobile Sidebar (Dialog Drawer) */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <BookOpen className="size-5 text-primary" /> Docs
              </h3>
            </div>
            <Separator className="my-4" />
            <ul className="space-y-4">
              {docs.map((doc, index) => (
                <li key={index}>
                  <Button
                    variant={
                      activeDoc.title === doc.title ? "default" : "ghost"
                    }
                    className="w-full text-left cursor-pointer text-base"
                    onClick={() => {
                      setActiveDoc(doc);
                      setIsOpen(false);
                    }}
                  >
                    {doc.title}
                  </Button>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-background dark:bg-[#262626] shadow-md border rounded-lg p-6 mx-auto max-md:w-full"
        >
          <h2 className="text-2xl font-bold text-foreground">
            {activeDoc.title}
          </h2>
          <Separator className="my-4" />
          <p className="text-muted-foreground text-lg">{activeDoc.content}</p>
        </motion.div>
      </section>
    </>
  );
};

export default DocumentationPage;
