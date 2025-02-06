"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";

interface DonationCardProps {
  amount: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  progress: string;
  goal: string;
  index: number;
}

export function DonationCard({
  // amount,
  title,
  description,
  headline,
  // image,
  // progress,
  // goal,
  index,
}: DonationCardProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="bg-[#faf9f6] rounded-[2rem] overflow-hidden shadow-lg"
    >
      <Card className="w-full h-full max-w-md mx-auto overflow-hidden rounded-[2rem]">
        <div className="relative">
          {/* <div className="aspect-[4/3] overflow-hidden rounded-b-[2.5rem] p-4">
            <Image
              src={image}
              alt={title}
              width={200}
              height={150}
              className="object-contain w-full h-full rounded-[1.5rem]"
            />
          </div> */}
        </div>

        <div className="p-6 space-y-6">
          <div>
            {/* <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-[#FF6B6B]">
                {amount}
              </span>
              <span className="text-xl text-gray-600">/MON</span>
            </div> */}
            <p className="mt-1 text-sm text-gray-600">
              {headline}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Raised : {progress}</span>
              <span>Goal: {goal}</span>
            </div>
            <Progress value={50} className="h-2 bg-gray-200" />
          </div>

          <Button className="w-full h-14 text-lg font-semibold bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white rounded-full">
            Donate Now
          </Button>
          */}
        </div>
      </Card>
    </motion.div>
  );
}
