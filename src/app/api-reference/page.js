"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Server, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    title: "High Performance",
    icon: Zap,
    description:
      "Experience lightning-fast API responses with minimal latency.",
  },
  {
    title: "Secure & Reliable",
    icon: ShieldCheck,
    description:
      "Industry-standard security ensures your data remains protected.",
  },
  {
    title: "Scalable Infrastructure",
    icon: Server,
    description:
      "Scale effortlessly as your business grows with our robust infrastructure.",
  },
  {
    title: "Developer-Friendly",
    icon: Code,
    description: "Clean and well-documented endpoints for smooth integration.",
  },
];

const SaasApiPage = () => {
  return (
    <div className="w-full py-20 px-6 md:px-10 bg-muted/30 dark:bg-black">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight">Powerful SaaS API</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Integrate our API seamlessly into your SaaS platform for unmatched
          performance and scalability.
        </p>
        <Button className="mt-6 px-6 py-2 text-base cursor-pointer">
          Get Started
        </Button>
      </motion.div>

      {/* Features Section */}
      <div className="grid gap-6 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 flex flex-col items-center text-center bg-background dark:bg-muted/10">
              <feature.icon className="size-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground mt-2">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Code Example */}
      <div className="mt-16 p-8 bg-[#262626] text-white rounded-lg">
        <h3 className="text-2xl font-semibold">Sample API Request</h3>
        <pre className="mt-4 bg-neutral-700 p-4 rounded-md overflow-x-auto">
          {`fetch('https://api.saasplatform.com/data', {
  method: 'GET',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
})
.then(response => response.json())
.then(data => console.log(data));`}
        </pre>
      </div>
    </div>
  );
};

export default SaasApiPage;
