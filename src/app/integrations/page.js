"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Slack,
  CreditCard,
  BarChart,
  Trello,
  CheckCircle,
} from "lucide-react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const integrations = [
  {
    name: "Zapier",
    description: "Automate workflows seamlessly.",
    icon: <Zap size={28} />,
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Slack",
    description: "Get instant notifications.",
    icon: <Slack size={28} />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Stripe",
    description: "Manage payments efficiently.",
    icon: <CreditCard size={28} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "HubSpot",
    description: "CRM integration made easy.",
    icon: <CheckCircle size={28} />,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Google Analytics",
    description: "Track and optimize performance.",
    icon: <BarChart size={28} />,
    color: "from-green-500 to-blue-500",
  },
  {
    name: "Trello",
    description: "Enhance project management.",
    icon: <Trello size={28} />,
    color: "from-yellow-500 to-green-500",
  },
];

const IntegrationsPage = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-muted/30 dark:bg-black relative">
      {/* Hero Section */}
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
          Integrations
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
          Connect Your Favorite Tools with Ease
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Enhance your workflow by integrating with powerful apps and services.
        </p>
      </motion.div>

      {/* Integrations Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-muted/10 to-muted/20 dark:from-muted/30 dark:to-muted/40 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-transparent hover:border-primary/30 cursor-pointer">
              {/* Icon with Glow */}
              <div
                className={`absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-tr ${integration.color} rounded-full blur-xl opacity-40`}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className={`p-4 rounded-lg bg-gradient-to-r ${integration.color} text-white`}
                >
                  {integration.icon}
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold">{integration.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {integration.description}
                  </p>
                </CardContent>
              </div>
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

export default IntegrationsPage;
