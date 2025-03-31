"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Corp",
    feedback:
      "This SaaS platform transformed our business! The automation and analytics are top-notch.",
    avatar: "/avatars/john.png",
  },
  {
    name: "Emily Smith",
    role: "Product Manager, StartupX",
    feedback:
      "Seamless integration and an intuitive interface. Highly recommended!",
    avatar: "/avatars/emily.png",
  },
  {
    name: "Michael Johnson",
    role: "CTO, FinTech Inc.",
    feedback:
      "The AI-powered automation is a game-changer. Our workflow has never been smoother.",
    avatar: "/avatars/michael.png",
  },
  {
    name: "Sophia Williams",
    role: "Marketing Lead, Cloud Solutions",
    feedback:
      "The analytics dashboard provides deep insights. It's a must-have tool for any business!",
    avatar: "/avatars/sophia.png",
  },
  {
    name: "David Brown",
    role: "Founder, E-Commerce Co.",
    feedback:
      "Security and scalability were our biggest concerns, and this platform exceeded our expectations!",
    avatar: "/avatars/david.png",
  },
  {
    name: "Olivia Martinez",
    role: "Operations Manager, HealthTech",
    feedback:
      "Multi-platform support allows our team to stay productive anywhere. Love it!",
    avatar: "/avatars/olivia.png",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <p className="text-muted-foreground mt-4">
          Hear from our happy customers who have transformed their businesses
          with our SaaS platform.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between p-6 border border-border/40 shadow-lg relative">
              <Quote className="absolute top-4 right-4 text-muted-foreground size-6" />
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-muted-foreground">{testimonial.feedback}</p>
                <div className="flex justify-center gap-1 text-yellow-500">
                  <Star className="size-5 fill-current" />
                  <Star className="size-5 fill-current" />
                  <Star className="size-5 fill-current" />
                  <Star className="size-5 fill-current" />
                  <Star className="size-5 fill-current" />
                </div>
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
        <h3 className="text-2xl font-bold">Join Our Happy Customers</h3>
        <p className="text-muted-foreground mt-2">
          Start your journey with our powerful SaaS platform today!
        </p>
        <Button className="mt-4 px-8 py-4 text-lg rounded-lg shadow-lg cursor-pointer">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
}
