"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import PricingSection from "@/components/PricingSection";

const Page = () => {
  return (
    <>
      <PricingSection />
      <div className="text-center max-w-2xl mx-auto my-5">
        <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
        <p className="text-muted-foreground mb-6">
          Contact our team for custom solutions or any inquiries about pricing
          plans.
        </p>
        <Button variant="default" className={"cursor-pointer"}>
          Contact Us
        </Button>
      </div>
    </>
  );
};

export default Page;
