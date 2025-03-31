import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Find answers to common questions about our platform.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How does the 14-day free trial work?",
                answer:
                  "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.",
              },
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.",
              },
              {
                question: "Is there a limit to how many users I can add?",
                answer:
                  "The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
              },
              {
                question:
                  "Do you offer discounts for nonprofits or educational institutions?",
                answer:
                  "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.",
              },
              {
                question: "How secure is my data?",
                answer:
                  "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem value={`item-${i}`} className="">
                  <AccordionTrigger className="text-left font-medium text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
