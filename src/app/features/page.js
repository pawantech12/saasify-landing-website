"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  BarChart3,
  Zap,
  Smartphone,
  ShieldCheck,
  Layers,
} from "lucide-react";

const features = [
  {
    title: "Seamless Integration",
    description: "Connect with popular tools and services effortlessly.",
    icon: CheckCircle,
  },
  {
    title: "Advanced Analytics",
    description: "Gain insights with real-time reports and dashboards.",
    icon: BarChart3,
  },
  {
    title: "AI-Powered Automation",
    description: "Automate workflows and enhance efficiency.",
    icon: Zap,
  },
  {
    title: "Multi-Platform Support",
    description: "Access our platform on web, mobile, and desktop.",
    icon: Smartphone,
  },
  {
    title: "Top-Notch Security",
    description: "Secure data encryption and compliance measures.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Architecture",
    description: "Designed to grow with your business needs.",
    icon: Layers,
  },
];

export default function FeaturesPage() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Powerful Features</h2>
        <p className="text-muted-foreground mt-4">
          Discover the core features that make our SaaS platform efficient,
          scalable, and user-friendly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between p-6 border border-gray-200 shadow-md">
              <CardContent className="flex flex-col items-center text-center space-y-4 h-full">
                <div className="text-primary bg-muted rounded-full p-4">
                  <feature.icon className="size-8" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground flex-1">
                  {feature.description}
                </p>
                <Button variant="outline" className="mt-auto cursor-pointer">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h3 className="text-2xl font-bold">Get Started Today</h3>
        <p className="text-muted-foreground mt-2">
          Start using our powerful SaaS tools and scale your business
          effortlessly.
        </p>
        <Button className="mt-4 px-8 py-4 text-lg rounded-lg shadow-lg cursor-pointer">
          Try for Free
        </Button>
      </motion.div>
    </section>
  );
}
