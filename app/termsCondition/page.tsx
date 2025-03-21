// 
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, Book, UserCheck, Scale, Clock, Lock, XCircle, RefreshCw } from "lucide-react";

export default function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const handleAccept = () => {
    if (!accepted) {
      toast.error("Please accept the terms and conditions to continue");
      return;
    }
    localStorage.setItem("termsAccepted", "true");
    toast.success("Terms and conditions accepted");
    router.push("/dashboard/users");
  };

  const sections = [
    {
      icon: <Book className="w-6 h-6 text-blue-500" />,
      title: "1. Introduction",
      content: "These Terms and Conditions govern your use of our delivery services. By using our services, you agree to these terms in full. If you disagree with any part of these terms, you must not use our services."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "2. Service Description",
      content: "We provide delivery services for packages and items between specified locations. Our service includes pickup, transportation, and delivery of items as per the details provided in the delivery application."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-blue-500" />,
      title: "3. User Responsibilities",
      content: "Users must provide accurate information, ensure packages don't contain prohibited items, package items appropriately, and pay all applicable fees.",
      list: [
        "Provide accurate sender and receiver information",
        "No prohibited items allowed",
        "Proper packaging required",
        "Timely payment of all fees"
      ]
    },
    {
      icon: <Scale className="w-6 h-6 text-blue-500" />,
      title: "4. Liability",
      content: "Our liability is limited to the declared value of the package or the maximum amount specified in our insurance policy, whichever is lower."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "5. Delivery Times",
      content: "While we strive to meet all delivery timeframes, delivery times are estimates and not guaranteed. Factors outside our control may affect delivery schedules."
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-500" />,
      title: "6. Privacy Policy",
      content: "We collect and process personal information in accordance with our Privacy Policy. By using our services, you consent to such processing."
    },
    {
      icon: <XCircle className="w-6 h-6 text-blue-500" />,
      title: "7. Cancellation Policy",
      content: "Cancellations must be made within the specified timeframe before pickup. Cancellation fees may apply as per our current fee schedule."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
      title: "8. Modifications",
      content: "We reserve the right to modify these terms at any time. Continued use of the service after any such changes constitutes your consent."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto p-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">
            Please read our terms and conditions carefully before proceeding
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6 bg-blue-500 text-white">
            <h2 className="text-xl font-semibold">Service Agreement</h2>
            <p className="text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <ScrollArea className="h-[60vh] w-full p-6">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-blue-600">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">{section.content}</p>
                  {section.list && (
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}
            </div>
          </ScrollArea>

          <div className="p-6 border-t border-blue-100 bg-white">
            <div className="flex items-center space-x-2 mb-6">
              <Checkbox 
                id="terms" 
                checked={accepted}
                onCheckedChange={(checked) => setAccepted(checked as boolean)}
                className="border-blue-500 text-orange-500"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium text-gray-600 cursor-pointer"
              >
                I have read and agree to the terms and conditions
              </label>
            </div>

            <div className="flex space-x-4">
              {/* <Button
                onClick={handleAccept}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300"
              >
                Accept and Continue
              </Button> */}
              <Button
                onClick={() => router.back()}
                variant="outline"
                className="w-full border-blue-500 text-blue-500 hover:text-orange-500 hover:bg-blue-50"
              >
                Accept and Continue
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          <p>
            If you have any questions about these terms, please contact our support team
          </p>
        </motion.div>
      </div>
    </div>
  );
}
