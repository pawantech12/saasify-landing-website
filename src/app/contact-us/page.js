"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 bg-muted/30 dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Have questions or need help? Fill out the form below or reach out to
          us directly.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-muted p-8 rounded-xl shadow-md border"
        >
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg h-12"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg h-12"
            />
            <Textarea
              placeholder="Your Message"
              className="p-3 rounded-lg h-28"
              rows={12}
              cols={20}
            />
            <Button className="w-full flex py-6 text-base items-center gap-2 cursor-pointer">
              <Send size={20} /> Send Message
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border dark:bg-neutral-800 p-8 rounded-xl shadow-md "
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="size-6" />
              <p>support@saascompany.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-6" />
              <p>+1 234 567 890</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-6" />
              <p>123 SaaS Street, Tech City, USA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
