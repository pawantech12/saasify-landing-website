"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Users } from "lucide-react";
import { Rocket } from "lucide-react";
import { Lightbulb } from "lucide-react";
import FAQSection from "@/components/FAQSection";
const jobs = [
  {
    title: "Senior Frontend Developer",
    description:
      "We are looking for an experienced React developer to join our team and build amazing SaaS products.",
    location: "Remote",
    type: "Full-Time",
  },
  {
    title: "Backend Engineer",
    description:
      "Join our backend team to work on scalable APIs and cloud-based solutions.",
    location: "Remote",
    type: "Full-Time",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design stunning interfaces and improve the user experience of our SaaS applications.",
    location: "Hybrid",
    type: "Part-Time",
  },
];
const benefits = [
  {
    icon: <Rocket className="size-10 text-primary" />,
    title: "Fast-Paced Growth",
    description:
      "Work in a dynamic environment where innovation meets execution.",
  },
  {
    icon: <Lightbulb className="size-10 text-yellow-400" />,
    title: "Innovative Culture",
    description:
      "We foster creativity and provide a space for your ideas to thrive.",
  },
  {
    icon: <Users className="size-10 text-blue-500" />,
    title: "Collaborative Team",
    description:
      "Join a team of like-minded professionals who push boundaries together.",
  },
  {
    icon: <Briefcase className="size-10 text-green-500" />,
    title: "Career Advancement",
    description:
      "We invest in your growth with mentorship and upskilling programs.",
  },
];
const CareersPage = () => {
  return (
    <>
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
            Careers
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Join Our Growing SaaS Team
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Be part of an innovative team that&apos;s building the future of
            SaaS. Explore open roles and apply today!
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden rounded-xl shadow-lg bg-background dark:bg-muted/10 hover:shadow-xl transition-all">
                <CardContent className="">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Briefcase className="size-5 text-primary" /> {job.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {job.description}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="size-4" /> {job.location}
                    </span>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-4 w-full cursor-pointer"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative py-20 px-6 md:px-10  dark:from-muted/50 dark:to-muted/30 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Why Work With Us?
          </h2>
          <p className=" mt-3">
            Join a company that values growth, innovation, and collaboration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-muted/20 p-6 rounded-xl shadow-md border backdrop-blur-md text-center"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className=" mt-2">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default CareersPage;
