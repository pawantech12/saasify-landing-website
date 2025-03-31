import Image from "next/image";
import React from "react";

const LogoSection = () => {
  return (
    <section className="w-full py-12 border-y bg-muted/30">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-base font-medium text-muted-foreground">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/meta-logo.png`}
                alt={`Company logo ${i}`}
                width={120}
                height={60}
                className=" w-auto opacity-70  transition-all hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
