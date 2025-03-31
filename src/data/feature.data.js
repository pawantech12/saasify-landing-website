import { Users } from "lucide-react";
import { Layers } from "lucide-react";
import { Star } from "lucide-react";
import { Shield } from "lucide-react";
import { BarChart } from "lucide-react";
import { Zap } from "lucide-react";

const features = [
  {
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and workflows to save time and reduce errors.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with real-time data visualization and reporting.",
    icon: <BarChart className="size-5" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Work together seamlessly with integrated communication tools.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Keep your data safe with end-to-end encryption and compliance features.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools through our extensive API ecosystem.",
    icon: <Layers className="size-5" />,
  },
  {
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our dedicated support team.",
    icon: <Star className="size-5" />,
  },
];

export default features;
