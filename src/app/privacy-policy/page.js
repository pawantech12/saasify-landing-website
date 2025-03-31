"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information.
        </p>
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto space-y-12">
        {[
          {
            title: "Information We Collect",
            content:
              "We collect personal information that you provide directly to us, such as when you create an account, make a purchase, or contact support.",
          },
          {
            title: "How We Use Your Information",
            content:
              "We use your information to provide, improve, and personalize our services, process transactions, and communicate with you.",
          },
          {
            title: "Sharing Your Information",
            content:
              "We do not sell your personal information. We may share it with trusted third parties for service-related purposes.",
          },
          {
            title: "Security Measures",
            content:
              "We implement industry-standard security measures to protect your data. However, no method of transmission is 100% secure.",
          },
          {
            title: "Your Rights",
            content:
              "You have the right to access, update, or delete your information. Contact us if you wish to exercise these rights.",
          },
          {
            title: "Changes to This Policy",
            content:
              "We may update this policy from time to time. We encourage you to review it periodically.",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-muted/20 dark:bg-muted/40 shadow-md">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="flex justify-center">
        <Button className="rounded-full px-8 text-base py-6 cursor-pointer">
          Contact Support
        </Button>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
