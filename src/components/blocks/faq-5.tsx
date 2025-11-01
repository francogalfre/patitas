"use client"

import { Badge } from "@/components/ui/badge";

import { motion } from "motion/react";

interface FaqItem {
  question: string,
  answer: string
}

interface FAQSectionProps {
  badge?: string,
  heading?: string,
  description?: string,
  faqs: Array<FaqItem>
}

export const Faq5 = ({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs
}: FAQSectionProps) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center">
        <motion.div
            className="w-fit mx-auto"
            initial={{ opacity: 0, y: -10, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: 2 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.1, stiffness: 200 }}
          >
            <Badge className="text-md px-4 py-1 font-medium font-raleway bg-primary/70 mb-4">
              {badge}
            </Badge>
          </motion.div>
          <div className="flex gap-4 flex-col mt-4">
            <motion.h2
                initial={{ opacity: 0, y: -10, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 1.5, delay: 0.2, stiffness: 200 }} 
                className="font-poppins text-3xl font-medium tracking-tight sm:max-w-5xl sm:text-5xl leading-14"
              >
                {heading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -10, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 1.5, delay: 0.3, stiffness: 200 }} 
                className="text-md max-w-[600px] sm:max-w-5xl font-raleway text-muted-foreground sm:text-xl"
              >
                {description}
              </motion.p>
          </div>
        </div>
        <div className="mx-auto mt-18 max-w-5xl flex flex-col items-center">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="mb-8 mt-4 flex gap-6"
              initial={{ opacity: 0, y: -10, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1.5, delay: 0.4 * index, stiffness: 200 }}  
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-sm font-serif bg-gray-200 text-lg text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-poppins text-3xl font-medium tracking-tight sm:max-w-4xl sm:text-xl">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-md max-w-[600px] sm:max-w-4xl font-raleway text-muted-foreground sm:text-md">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

