"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl text-center"
      >
        <h2 className="text-4xl font-bold">Who We Are</h2>
        <p className="text-lg text-muted-foreground mt-4">
          We are a team of innovators dedicated to building scalable and
          impactful digital solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
        {/* Mission */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold">🌍 Our Mission</h3>
            <p className="text-muted-foreground mt-2">
              Empower businesses with cutting-edge technology and seamless
              digital experiences.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold">🚀 Our Vision</h3>
            <p className="text-muted-foreground mt-2">
              To create a future where businesses thrive through innovation and
              efficiency.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Values */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
        {[
          {
            title: "✨ Innovation",
            text: "We embrace creativity to drive progress.",
          },
          {
            title: "🛠️ Quality",
            text: "Delivering excellence through precision and performance.",
          },
          {
            title: "🤝 Collaboration",
            text: "Strong partnerships lead to exceptional results.",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-2">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="text-center mt-12 w-full max-w-5xl">
        <h3 className="text-3xl font-bold">💻 Our Tech Stack</h3>
        <p className="text-muted-foreground mt-2">
          We build with the latest and most reliable technologies.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Next.js",
            "TailwindCSS",
            "Node.js",
            "MongoDB",
            "TypeScript",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-muted rounded-lg text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="flex flex-col items-center mt-12">
        <h3 className="text-3xl font-bold">🚀 Let’s Build Together</h3>
        <p className="text-muted-foreground mt-2">
          Partner with us to bring your ideas to life.
        </p>
        <Button className="mt-6 rounded-full px-8 py-5 text-lg cursor-pointer group">
          Get in Touch{" "}
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-all ease-in-out duration-300" />
        </Button>
      </div>
    </section>
  );
}
