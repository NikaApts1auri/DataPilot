import { Rocket, Zap, ShieldCheck, RefreshCw } from "lucide-react";
import { ReactNode } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export const features: Feature[] = [
  {
    title: "Seamless Integration",
    description: "Connect DataPilot with your favorite tools effortlessly.",
    icon: <Rocket className="h-8 w-8 text-blue-500 mb-4" />,
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights and monitor your performance live.",
    icon: <Zap className="h-8 w-8 text-green-500 mb-4" />,
  },
  {
    title: "Secure Storage",
    description: "Your data is encrypted and safely stored in the cloud.",
    icon: <ShieldCheck className="h-8 w-8 text-yellow-500 mb-4" />,
  },
  {
    title: "Constant Updates",
    description:
      "We are constantly adding new features and improving the platform.",
    icon: <RefreshCw className="h-8 w-8 text-purple-500 mb-4" />,
  },
];
